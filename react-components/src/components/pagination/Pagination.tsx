import { forwardRef, useCallback, useMemo } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { Icon } from '../icon'

/**
 * Pagination constants matching the web component
 */
const NUM_BUTTONS = 7
const MIDDLE_BTN_INDEX = Math.floor(NUM_BUTTONS / 2)
const FIRST_BTN_INDEX = 0
const LAST_BTN_INDEX = NUM_BUTTONS - 1
const DOTS_LEFT_INDEX = 1
const DOTS_RIGHT_INDEX = LAST_BTN_INDEX - 1

/**
 * Determines if a button should show ellipsis
 */
const isEllipsis = (btnIndex: number, value: number, max: number): boolean => {
  return (
    (btnIndex === DOTS_LEFT_INDEX && value > MIDDLE_BTN_INDEX) ||
    (btnIndex === DOTS_RIGHT_INDEX && value <= max - DOTS_RIGHT_INDEX)
  )
}

const wrapperVariants = cva([
  'flex',
  'justify-center',
  'items-center',
  'gap-2',
  'h-6',
])

const buttonVariants = cva(
  [
    // Reset and base
    'relative',
    'flex',
    'justify-center',
    'items-center',
    'min-w-6',
    'h-6',
    'cursor-pointer',
    'rounded-[var(--sinch-comp-pagination-shape-radius)]',
    'select-none',
    'outline-none',
    // Focus ring
    'focus-visible:before:content-[\'\']',
    'focus-visible:before:absolute',
    'focus-visible:before:inset-[-3px]',
    'focus-visible:before:border-2',
    'focus-visible:before:border-solid',
    'focus-visible:before:border-[var(--sinch-comp-pagination-color-default-outline-focus)]',
    'focus-visible:before:rounded-[calc(var(--sinch-comp-pagination-shape-radius)+3px)]',
    'focus-visible:before:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        arrow: [
          'text-[var(--sinch-comp-pagination-color-default-icon-default)]',
          'enabled:hover:bg-[var(--sinch-comp-pagination-color-default-background-hover)]',
          'disabled:text-[var(--sinch-comp-pagination-color-disabled-icon-initial)]',
          'disabled:cursor-default',
        ],
        page: [
          'px-1',
          'font-[var(--sinch-comp-pagination-font-default-page-number)]',
          'text-[var(--sinch-comp-pagination-color-default-text-initial)]',
          'bg-[var(--sinch-comp-pagination-color-default-background-initial)]',
          'enabled:hover:bg-[var(--sinch-comp-pagination-color-default-background-hover)]',
        ],
        pageActive: [
          'px-1',
          'font-[var(--sinch-comp-pagination-font-checked-page-number)]',
          'text-[var(--sinch-comp-pagination-color-default-text-initial)]',
          'bg-[var(--sinch-comp-pagination-color-checked-background-initial)]',
          'pointer-events-none',
          'cursor-default',
        ],
      },
    },
    defaultVariants: {
      variant: 'page',
    },
  }
)

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /**
   * Current page (1-indexed)
   */
  value: number
  /**
   * Total number of pages
   */
  max: number
  /**
   * Callback fired when the page changes
   */
  onChange?: (value: number) => void
  /**
   * Aria label for the navigation element
   * @default 'Pagination'
   */
  ariaLabel?: string
}

interface PageButtonData {
  index: number
  pageNumber: number
  isActive: boolean
  isEllipsis: boolean
  isHidden: boolean
}

/**
 * Pagination component for navigating between pages.
 *
 * Displays a row of page buttons with ellipsis when there are many pages.
 * Supports keyboard navigation and screen readers.
 *
 * @example
 * ```tsx
 * <Pagination value={1} max={10} onChange={(page) => setPage(page)} />
 * ```
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  ({ className, value, max, onChange, ariaLabel = 'Pagination', ...props }, ref) => {
    // Convert to 0-indexed for internal calculations
    const valueIndex = value - 1
    const maxPages = Math.max(0, max)

    // Calculate the offset for page numbering
    const valueOffset = useMemo(() => {
      return Math.min(
        Math.max(0, valueIndex - MIDDLE_BTN_INDEX),
        Math.max(0, maxPages - NUM_BUTTONS)
      )
    }, [valueIndex, maxPages])

    // Generate page button data
    const pageButtons = useMemo((): PageButtonData[] => {
      return Array.from({ length: NUM_BUTTONS }, (_, i) => {
        let isActive = false

        if (valueIndex < 3) {
          isActive = valueIndex === i
        } else if (valueIndex >= maxPages - MIDDLE_BTN_INDEX) {
          isActive = i + valueOffset === valueIndex
        } else {
          isActive = i === MIDDLE_BTN_INDEX
        }

        const pageNumber =
          i === FIRST_BTN_INDEX
            ? 1
            : i === LAST_BTN_INDEX
              ? maxPages
              : i + 1 + valueOffset

        const showEllipsis = maxPages > NUM_BUTTONS && isEllipsis(i, valueIndex, maxPages)

        return {
          index: i,
          pageNumber,
          isActive,
          isEllipsis: showEllipsis,
          isHidden: i >= maxPages,
        }
      })
    }, [valueIndex, maxPages, valueOffset])

    // Clamp value to valid range and convert to 1-indexed
    const clamp = useCallback(
      (val: number): number => {
        return Math.max(0, Math.min(maxPages - 1, val)) + 1
      },
      [maxPages]
    )

    // Handle page button click
    const handlePageClick = useCallback(
      (btnIndex: number) => {
        let newValue: number

        // First number button
        if (btnIndex === FIRST_BTN_INDEX) {
          newValue = 0
        }
        // Last number button
        else if (btnIndex === LAST_BTN_INDEX) {
          newValue = maxPages - 1
        }
        // Left dots button - jump to middle of first half
        else if (
          btnIndex === DOTS_LEFT_INDEX &&
          maxPages > NUM_BUTTONS &&
          valueIndex > MIDDLE_BTN_INDEX
        ) {
          newValue = Math.floor(valueIndex / 2)
        }
        // Right dots button - jump to middle of second half
        else if (
          btnIndex === DOTS_RIGHT_INDEX &&
          maxPages > NUM_BUTTONS &&
          valueIndex <= maxPages - DOTS_RIGHT_INDEX
        ) {
          newValue = Math.floor((maxPages - valueIndex) / 2 + valueIndex)
        }
        // Regular number button
        else {
          newValue =
            btnIndex +
            Math.min(
              Math.max(0, valueIndex - MIDDLE_BTN_INDEX),
              Math.max(0, maxPages - NUM_BUTTONS)
            )
        }

        onChange?.(clamp(newValue))
      },
      [valueIndex, maxPages, onChange, clamp]
    )

    // Handle left arrow click
    const handleLeftClick = useCallback(() => {
      onChange?.(clamp(Math.max(valueIndex - 1, 0)))
    }, [valueIndex, onChange, clamp])

    // Handle right arrow click
    const handleRightClick = useCallback(() => {
      onChange?.(clamp(Math.min(valueIndex + 1, maxPages - 1)))
    }, [valueIndex, maxPages, onChange, clamp])

    // Determine arrow button disabled states
    const isValueBad = valueIndex < 0 || valueIndex >= maxPages
    const isLeftDisabled = isValueBad || valueIndex === 0
    const isRightDisabled = isValueBad || valueIndex === maxPages - 1

    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cn('inline-block align-middle outline-none', className)}
        {...props}
      >
        <div className={wrapperVariants()}>
          {/* Left arrow button */}
          <button
            type="button"
            aria-label="Go back"
            disabled={isLeftDisabled}
            onClick={handleLeftClick}
            className={buttonVariants({ variant: 'arrow' })}
          >
            <Icon name="fa-angle-left" iconsVersion="2" size="md" />
          </button>

          {/* Page buttons */}
          {pageButtons.map((btn) => {
            if (btn.isHidden) {
              return null
            }

            return (
              <button
                key={btn.index}
                type="button"
                aria-label={`Go to page ${btn.pageNumber}`}
                aria-current={btn.isActive ? 'page' : undefined}
                aria-hidden={btn.isEllipsis ? true : undefined}
                disabled={btn.isEllipsis}
                onClick={() => handlePageClick(btn.index)}
                className={buttonVariants({
                  variant: btn.isActive ? 'pageActive' : 'page',
                })}
              >
                {btn.isEllipsis ? '...' : <span>{btn.pageNumber}</span>}
              </button>
            )
          })}

          {/* Right arrow button */}
          <button
            type="button"
            aria-label="Go forward"
            disabled={isRightDisabled}
            onClick={handleRightClick}
            className={buttonVariants({ variant: 'arrow' })}
          >
            <Icon name="fa-angle-right" iconsVersion="2" size="md" />
          </button>
        </div>
      </nav>
    )
  }
)
Pagination.displayName = 'Pagination'
