import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '../../utils/cn'

const textareaWrapperVariants = cva(
  // Base styles
  [
    'relative flex flex-col box-border w-full',
    'bg-[var(--sinch-comp-textarea-color-default-background-initial)]',
    'rounded-[var(--sinch-comp-textarea-shape-radius)]',
    'pr-0.5 overflow-hidden',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

const textareaInputVariants = cva(
  // Base styles for the textarea element
  [
    'w-full px-3 py-2 box-border',
    'bg-transparent outline-none border-none',
    'resize-none',
    'whitespace-pre-wrap break-words',
    'font-[var(--sinch-comp-textarea-font-input)]',
    'text-[var(--sinch-comp-textarea-color-default-text-initial)]',
    'placeholder:text-[var(--sinch-comp-textarea-color-default-text-placeholder)]',
    'placeholder:opacity-100',
    'disabled:text-[var(--sinch-comp-textarea-color-disabled-text-initial)]',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

const borderVariants = cva(
  // Base styles for the border overlay
  [
    'absolute inset-0 pointer-events-none',
    'border border-[var(--sinch-comp-textarea-color-default-border-initial)]',
    'rounded-[var(--sinch-comp-textarea-shape-radius)]',
    'transition-colors',
  ],
  {
    variants: {
      isFocused: {
        true: 'border-[var(--sinch-comp-textarea-color-default-border-focus)] border-2',
        false: '',
      },
      isInvalid: {
        true: 'border-[var(--sinch-comp-textarea-color-invalid-border-initial)]',
        false: '',
      },
      isDisabled: {
        true: 'border-[var(--sinch-comp-textarea-color-disabled-border-initial)]',
        false: '',
      },
    },
    compoundVariants: [
      // Focus takes precedence over invalid
      {
        isFocused: true,
        isInvalid: true,
        className: 'border-[var(--sinch-comp-textarea-color-default-border-focus)]',
      },
      // Disabled takes precedence over everything
      {
        isDisabled: true,
        className: 'border-[var(--sinch-comp-textarea-color-disabled-border-initial)]',
      },
    ],
    defaultVariants: {
      isFocused: false,
      isInvalid: false,
      isDisabled: false,
    },
  }
)

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>,
  VariantProps<typeof textareaWrapperVariants> {
  /**
   * Controlled value
   */
  value?: string,
  /**
   * Default value for uncontrolled usage
   */
  defaultValue?: string,
  /**
   * Placeholder text
   */
  placeholder?: string,
  /**
   * Invalid/error state
   * @default false
   */
  invalid?: boolean,
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean,
  /**
   * Read-only state
   * @default false
   */
  readOnly?: boolean,
  /**
   * Required field
   * @default false
   */
  required?: boolean,
  /**
   * Number of visible rows
   */
  rows?: number,
  /**
   * Minimum number of rows (auto-resize mode)
   */
  minRows?: number,
  /**
   * Maximum number of rows (auto-resize mode)
   */
  maxRows?: number,
  /**
   * Whether the textarea is resizable by dragging
   * @default false
   */
  resizable?: boolean,
  /**
   * Accessible label
   */
  'aria-label'?: string,
  /**
   * Content displayed in the bottom slot
   */
  bottomContent?: React.ReactNode,
  /**
   * Change handler - receives the new value string
   */
  onChange?: (value: string) => void,
  /**
   * Focus handler
   */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void,
  /**
   * Blur handler
   */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void,
  /**
   * Key down handler
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void,
}

/**
 * Textarea component for multi-line text input.
 *
 * Supports controlled and uncontrolled patterns, auto-resize behavior,
 * error states, and a resizable drag handle.
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue,
      placeholder,
      invalid = false,
      disabled = false,
      readOnly = false,
      required = false,
      rows,
      minRows,
      maxRows,
      resizable = false,
      'aria-label': ariaLabel,
      bottomContent,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    // Internal state for uncontrolled mode
    const [internalValue, setInternalValue] = useState(defaultValue ?? '')
    const [isFocused, setIsFocused] = useState(false)

    // Ref for internal textarea access
    const internalRef = useRef<HTMLTextAreaElement>(null)

    // Combine forwarded ref with internal ref
    const setRefs = useCallback(
      (element: HTMLTextAreaElement | null) => {
        // Set internal ref
        (internalRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = element

        // Set forwarded ref
        if (typeof ref === 'function') {
          ref(element)
        } else if (ref !== null) {
          (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = element
        }
      },
      [ref]
    )

    // Drag resize state
    const dragStateRef = useRef({ startY: 0, startHeight: 0 })
    const [customHeight, setCustomHeight] = useState<number | null>(null)

    // Determine if controlled
    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    // Auto-resize effect (when not resizable)
    useEffect(() => {
      const textarea = internalRef.current

      if (textarea === null || resizable) {
        return
      }

      // Reset height to calculate scroll height correctly
      textarea.style.height = 'auto'

      // Calculate constraints
      let minHeight = 0
      let maxHeight = Infinity

      if (minRows !== undefined && minRows > 0) {
        const originalRows = textarea.rows

        textarea.rows = minRows
        minHeight = textarea.scrollHeight
        textarea.rows = originalRows
      }

      if (maxRows !== undefined && maxRows > 0) {
        const originalRows = textarea.rows

        textarea.rows = maxRows
        maxHeight = textarea.scrollHeight
        textarea.rows = originalRows
      }

      // Calculate and apply new height
      const scrollHeight = textarea.scrollHeight
      const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight)

      textarea.style.height = `${newHeight}px`
    }, [value, minRows, maxRows, resizable])

    // Apply custom height when resizable
    useEffect(() => {
      const textarea = internalRef.current

      if (textarea === null || customHeight === null) {
        return
      }

      textarea.style.height = `${customHeight}px`
    }, [customHeight])

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value

        if (!isControlled) {
          setInternalValue(newValue)
        }

        onChange?.(newValue)
      },
      [isControlled, onChange]
    )

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(true)
        onFocus?.(e)
      },
      [onFocus]
    )

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(false)
        onBlur?.(e)
      },
      [onBlur]
    )

    // Drag resize handlers
    const handleDragStart = useCallback(
      (e: React.MouseEvent) => {
        e.preventDefault()
        const textarea = internalRef.current

        if (textarea === null) {
          return
        }

        dragStateRef.current = {
          startY: e.clientY,
          startHeight: textarea.getBoundingClientRect().height,
        }

        const handleDragMove = (moveEvent: MouseEvent) => {
          const dy = moveEvent.clientY - dragStateRef.current.startY
          const newHeight = Math.max(0, dragStateRef.current.startHeight + dy)

          setCustomHeight(newHeight)
        }

        const handleDragEnd = () => {
          document.removeEventListener('mousemove', handleDragMove)
          document.removeEventListener('mouseup', handleDragEnd)
        }

        document.addEventListener('mousemove', handleDragMove)
        document.addEventListener('mouseup', handleDragEnd)
      },
      []
    )

    const hasBottomContent = bottomContent !== undefined || resizable

    return (
      <div className={cn(textareaWrapperVariants({}), className)}>
        {/* Textarea */}
        <textarea
          ref={setRefs}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          rows={rows}
          aria-label={ariaLabel}
          aria-invalid={invalid}
          aria-multiline="true"
          className={cn(textareaInputVariants({}))}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={onKeyDown}
          {...props}
        />

        {/* Border overlay */}
        <div
          className={cn(
            borderVariants({
              isFocused,
              isInvalid: invalid && !isFocused,
              isDisabled: disabled,
            })
          )}
        />

        {/* Bottom section with slot content and resize handle */}
        {hasBottomContent && (
          <div
            className={cn(
              'flex flex-row items-center gap-2 px-1 pt-3 pb-1',
              resizable && 'pr-[calc(var(--sinch-comp-textarea-size-resize-handle)+4px)]'
            )}
          >
            {bottomContent}
          </div>
        )}

        {/* Resize handle */}
        {resizable && (
          <div
            className={cn(
              'absolute bottom-0 right-0 cursor-ns-resize',
              'w-[var(--sinch-comp-textarea-size-resize-handle)]',
              'h-[var(--sinch-comp-textarea-size-resize-handle)]'
            )}
            onMouseDown={handleDragStart}
            aria-hidden="true"
          >
            <svg
              className="block pointer-events-none fill-[var(--sinch-comp-textarea-color-default-border-initial)]"
              width="16"
              height="16"
            >
              <path d="m14.833 4.724-9.61 9.61-.942-.944 9.61-9.609.942.943ZM15.443 10 10.5 14.943 9.557 14 14.5 9.057l.943.943Z"/>
            </svg>
          </div>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'
