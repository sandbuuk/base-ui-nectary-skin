import {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../utils/cn'

/**
 * Pop is a low-level floating element utility component.
 * It positions content relative to a target element and handles:
 * - Multiple orientations (top, bottom, left, right, center variants)
 * - Modal and non-modal modes
 * - Scroll locking
 * - Backdrop interactions
 * - Viewport clamping
 */

export type PopOrientation =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'top-stretch'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-stretch'
  | 'center-left'
  | 'center-right'

export interface PopProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  /** Whether the pop is open */
  open?: boolean
  /** Orientation/position of the pop relative to the target */
  orientation?: PopOrientation
  /** Modal mode - shows backdrop and uses showModal() */
  modal?: boolean
  /** Allow page scrolling when pop is open (non-modal mode only) */
  allowScroll?: boolean
  /** Hide the pop if the target is outside the viewport */
  hideOutsideViewport?: boolean
  /** Inset from viewport edges */
  inset?: number
  /** Disable closing on backdrop click */
  disableBackdropClose?: boolean
  /** Callback when the pop requests to close */
  onClose?: () => void
  /** The target/trigger element */
  children: React.ReactNode
  /** The floating content */
  content: React.ReactNode
  /** Accessible label for the dialog */
  'aria-label'?: string
}

interface Position {
  x: number
  y: number
}

// Counter for managing body scroll lock
let scrollLockCounter = 0

const disableOverscroll = () => {
  scrollLockCounter++
  if (scrollLockCounter === 1) {
    document.body.style.setProperty('overscroll-behavior', 'none')
    document.documentElement.style.setProperty('overscroll-behavior', 'none')
  }
}

const enableOverscroll = () => {
  scrollLockCounter = Math.max(0, scrollLockCounter - 1)
  if (scrollLockCounter === 0) {
    document.body.style.removeProperty('overscroll-behavior')
    document.documentElement.style.removeProperty('overscroll-behavior')
  }
}

export const Pop = forwardRef<HTMLDivElement, PopProps>(
  (
    {
      className,
      children,
      content,
      open = false,
      orientation = 'bottom-right',
      modal = false,
      allowScroll = false,
      hideOutsideViewport = false,
      inset = 0,
      disableBackdropClose = false,
      onClose,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
    const [contentWidth, setContentWidth] = useState<number | undefined>(undefined)
    const [isHidden, setIsHidden] = useState(false)

    const targetRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const backdropRef = useRef<HTMLDivElement>(null)

    // Get the bounding rect of the target element
    const getTargetRect = useCallback(() => {
      if (targetRef.current === null) {
        return { x: 0, y: 0, width: 0, height: 0 }
      }

      // Check if target has a footprintRect property (for nested pops)
      const firstChild = targetRef.current.firstElementChild as HTMLElement | null
      if (firstChild !== null && 'footprintRect' in firstChild) {
        return (firstChild as { footprintRect: DOMRect }).footprintRect
      }

      return targetRef.current.getBoundingClientRect()
    }, [])

    // Calculate position based on orientation
    const updatePosition = useCallback(() => {
      if (contentRef.current === null) {
        return
      }

      const targetRect = getTargetRect()
      const contentRect = contentRef.current.getBoundingClientRect()
      const modalWidth = contentRect.width
      const modalHeight = contentRect.height

      let x = 0
      let y = 0

      // Calculate X position
      if (
        orientation === 'bottom-right' ||
        orientation === 'top-right' ||
        orientation === 'top-stretch' ||
        orientation === 'bottom-stretch'
      ) {
        x = targetRect.x
      } else if (orientation === 'bottom-left' || orientation === 'top-left') {
        x = targetRect.x + targetRect.width - modalWidth
      } else if (orientation === 'bottom-center' || orientation === 'top-center') {
        x = targetRect.x + targetRect.width / 2 - modalWidth / 2
      } else if (orientation === 'center-right') {
        x = targetRect.x + targetRect.width
      } else if (orientation === 'center-left') {
        x = targetRect.x - modalWidth
      }

      // Calculate Y position
      if (
        orientation === 'bottom-left' ||
        orientation === 'bottom-right' ||
        orientation === 'bottom-stretch' ||
        orientation === 'bottom-center'
      ) {
        y = targetRect.y + targetRect.height
      } else if (
        orientation === 'top-left' ||
        orientation === 'top-right' ||
        orientation === 'top-stretch' ||
        orientation === 'top-center'
      ) {
        y = targetRect.y - modalHeight
      } else if (orientation === 'center-left' || orientation === 'center-right') {
        y = targetRect.y + targetRect.height / 2 - modalHeight / 2
      }

      // Clamp to viewport
      const clampedX = Math.max(inset, Math.min(x, window.innerWidth - modalWidth - inset))
      const clampedY = Math.max(inset, Math.min(y, window.innerHeight - modalHeight - inset))

      // Check if we should hide (when position is clamped beyond threshold)
      if (hideOutsideViewport) {
        const isOutside = Math.abs(clampedX - x) > 2 || Math.abs(clampedY - y) > 2
        setIsHidden(isOutside)
      }

      setPosition({ x: clampedX, y: clampedY })

      // Set width for stretch orientations
      if (orientation === 'top-stretch' || orientation === 'bottom-stretch') {
        setContentWidth(targetRect.width)
      } else {
        setContentWidth(undefined)
      }
    }, [orientation, inset, hideOutsideViewport, getTargetRect])

    // Update position when open or dependencies change
    useLayoutEffect(() => {
      if (open) {
        // Use requestAnimationFrame to wait for content to render
        requestAnimationFrame(() => {
          updatePosition()
        })
      }
    }, [open, updatePosition])

    // Handle resize and scroll
    useEffect(() => {
      if (!open) {
        return
      }

      const handleResize = () => {
        updatePosition()
      }

      const resizeObserver = new ResizeObserver(handleResize)

      if (contentRef.current !== null) {
        resizeObserver.observe(contentRef.current)
      }

      window.addEventListener('resize', handleResize)

      // Handle scroll on scrollable parents
      if (allowScroll) {
        const handleScroll = () => updatePosition()
        window.addEventListener('scroll', handleScroll, { passive: true, capture: true })

        return () => {
          resizeObserver.disconnect()
          window.removeEventListener('resize', handleResize)
          window.removeEventListener('scroll', handleScroll, { capture: true })
        }
      }

      return () => {
        resizeObserver.disconnect()
        window.removeEventListener('resize', handleResize)
      }
    }, [open, allowScroll, updatePosition])

    // Handle escape key and dialog cancel
    useEffect(() => {
      if (!open) {
        return
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          onClose?.()
        }
      }

      document.addEventListener('keydown', handleKeyDown)

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [open, onClose])

    // Handle scroll locking
    useEffect(() => {
      if (!open) {
        return
      }

      if (!allowScroll) {
        disableOverscroll()
        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
          enableOverscroll()
          document.body.style.overflow = originalOverflow
        }
      }
    }, [open, allowScroll])

    // Handle backdrop click
    const handleBackdropClick = useCallback(
      (e: React.MouseEvent) => {
        if (disableBackdropClose) {
          return
        }
        if (e.target === e.currentTarget) {
          onClose?.()
        }
      },
      [disableBackdropClose, onClose]
    )

    // Handle click outside in non-modal mode
    useEffect(() => {
      if (!open || modal) {
        return
      }

      const handleClickOutside = (e: MouseEvent) => {
        if (disableBackdropClose) {
          return
        }
        // Don't fire if clicking the backdrop (that has its own handler)
        if (backdropRef.current !== null && backdropRef.current.contains(e.target as Node)) {
          return
        }
        if (
          contentRef.current !== null &&
          !contentRef.current.contains(e.target as Node) &&
          targetRef.current !== null &&
          !targetRef.current.contains(e.target as Node)
        ) {
          onClose?.()
        }
      }

      // Delay to prevent immediate close when opening via click
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside)
      }, 0)

      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [open, modal, disableBackdropClose, onClose])

    const popContent = open && (
      <>
        {/* Backdrop */}
        <div
          ref={backdropRef}
          className={cn(
            'fixed inset-0 z-50',
            modal ? 'bg-transparent' : 'bg-transparent'
          )}
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
        {/* Dialog container */}
        <dialog
          ref={dialogRef}
          className={cn(
            'fixed z-50 m-0 p-0 border-none bg-transparent outline-none',
            'max-w-none max-h-none overflow-visible',
            isHidden && 'invisible'
          )}
          style={{
            left: position.x,
            top: position.y,
            width: contentWidth,
          }}
          open
          aria-label={ariaLabel}
          aria-modal={modal}
        >
          <div ref={contentRef} className={cn('relative', className)} {...props}>
            {content}
          </div>
        </dialog>
      </>
    )

    return (
      <div ref={ref} className="contents">
        <div
          ref={targetRef}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          {children}
        </div>
        {createPortal(popContent, document.body)}
      </div>
    )
  }
)
Pop.displayName = 'Pop'
