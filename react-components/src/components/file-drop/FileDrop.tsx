import { forwardRef, useCallback, useRef, useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

/**
 * Type of invalid file selection
 */
export type FileDropInvalidType = 'accept' | 'multiple' | 'size'

// Validation utilities
const areFilesAccepted = (files: File[], accept: string | null): boolean => {
  if (accept === null) {
    return true
  }

  const acceptValues = accept.split(/\s*,\s*/)

  return files.every((file) => {
    return acceptValues.some((acceptValue) => {
      if (acceptValue.startsWith('.')) {
        return file.name.endsWith(acceptValue)
      }

      if (acceptValue === 'image/*') {
        return file.type.startsWith('image/')
      }

      if (acceptValue === 'video/*') {
        return file.type.startsWith('video/')
      }

      if (acceptValue === 'audio/*') {
        return file.type.startsWith('audio/')
      }

      return acceptValue === file.type
    })
  })
}

const areItemsAccepted = (items: DataTransferItem[], accept: string | null): boolean => {
  if (accept === null) {
    return true
  }

  const acceptValues = accept.split(/\s*,\s*/)

  return items.every((item) => {
    return acceptValues.some((acceptValue) => {
      if (acceptValue === 'image/*') {
        return item.type.startsWith('image/')
      }

      if (acceptValue === 'video/*') {
        return item.type.startsWith('video/')
      }

      if (acceptValue === 'audio/*') {
        return item.type.startsWith('audio/')
      }

      return acceptValue === item.type
    })
  })
}

const doFilesSatisfySize = (files: File[], size: number | null): boolean => {
  if (size === null || size <= 0) {
    return true
  }

  return files.every((file) => {
    return file.size <= size
  })
}

const wrapperVariants = cva(
  // Base styles
  [
    'relative flex flex-row flex-wrap justify-center content-center gap-2',
    'min-h-[148px] min-w-[148px] box-border p-4',
    'rounded-[var(--sinch-comp-file-drop-shape-radius)]',
    'bg-[var(--sinch-comp-file-drop-color-default-background-initial)]',
  ],
  {
    variants: {
      isInvalid: {
        true: 'bg-[var(--sinch-comp-file-drop-color-invalid-background-initial)]',
        false: '',
      },
      isDisabled: {
        true: 'bg-[var(--sinch-comp-file-drop-color-disabled-background-initial)]',
        false: '',
      },
      isDragging: {
        true: '',
        false: '',
      },
      isDragValid: {
        true: 'bg-[var(--sinch-comp-file-drop-color-default-background-active)]',
        false: '',
      },
      isDragInvalid: {
        true: 'bg-[var(--sinch-comp-file-drop-color-invalid-background-active)]',
        false: '',
      },
    },
    defaultVariants: {
      isInvalid: false,
      isDisabled: false,
      isDragging: false,
      isDragValid: false,
      isDragInvalid: false,
    },
  }
)

const borderVariants = cva(
  // Base border styles (dashed border pseudo-element)
  [
    'absolute inset-0 pointer-events-none',
    'border border-dashed border-[var(--sinch-comp-file-drop-color-default-border-initial)]',
    'rounded-[var(--sinch-comp-file-drop-shape-radius)]',
    'transition-colors',
  ],
  {
    variants: {
      isInvalid: {
        true: 'border-[var(--sinch-comp-file-drop-color-invalid-border-initial)]',
        false: '',
      },
      isDisabled: {
        true: 'border-[var(--sinch-comp-file-drop-color-disabled-border-initial)]',
        false: '',
      },
      isDragging: {
        true: 'pointer-events-auto',
        false: '',
      },
      isDragValid: {
        true: 'border-[var(--sinch-comp-file-drop-color-default-border-active)] border-2 border-solid',
        false: '',
      },
      isDragInvalid: {
        true: 'border-[var(--sinch-comp-file-drop-color-invalid-border-active)] border-2 border-solid',
        false: '',
      },
    },
    defaultVariants: {
      isInvalid: false,
      isDisabled: false,
      isDragging: false,
      isDragValid: false,
      isDragInvalid: false,
    },
  }
)

const placeholderVariants = cva(
  // Base placeholder styles
  [
    'self-center text-center',
    'font-[var(--sinch-comp-file-drop-font-placeholder)]',
    'text-[var(--sinch-comp-file-drop-color-default-placeholder-initial)]',
  ],
  {
    variants: {
      isDisabled: {
        true: 'text-[var(--sinch-comp-file-drop-color-disabled-placeholder-initial)]',
        false: '',
      },
      isDragValid: {
        true: 'text-[var(--sinch-comp-file-drop-color-default-placeholder-active)]',
        false: '',
      },
      isDragInvalid: {
        true: 'text-[var(--sinch-comp-file-drop-color-invalid-placeholder-active)]',
        false: '',
      },
    },
    defaultVariants: {
      isDisabled: false,
      isDragValid: false,
      isDragInvalid: false,
    },
  }
)

export interface FileDropProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onInvalid'>,
    VariantProps<typeof wrapperVariants> {
  /**
   * Allows to choose multiple files
   * @default false
   */
  multiple?: boolean,
  /**
   * A unique file type specifier
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
   */
  accept?: string,
  /**
   * Max file size in bytes
   */
  maxSize?: number,
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean,
  /**
   * Invalid/error state
   * @default false
   */
  invalid?: boolean,
  /**
   * Placeholder text displayed in the drop zone
   */
  placeholder?: string,
  /**
   * Button text (passed to children slot)
   */
  buttonText?: string,
  /**
   * Change handler - receives the selected files
   */
  onChange?: (files: File[]) => void,
  /**
   * Invalid handler - receives the type of validation error
   */
  onInvalid?: (type: FileDropInvalidType) => void,
}

/**
 * FileDrop component for drag-and-drop file uploads.
 *
 * Provides a drop zone for files with validation for file type, count, and size.
 * Also includes a file picker button for traditional file selection.
 */
export const FileDrop = forwardRef<HTMLDivElement, FileDropProps>(
  (
    {
      className,
      multiple = false,
      accept,
      maxSize,
      disabled = false,
      invalid = false,
      placeholder,
      buttonText = 'Choose file',
      onChange,
      onInvalid,
      children,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [isDragValid, setIsDragValid] = useState(false)

    const isDragInvalid = isDragging && !isDragValid

    const handleDragEnter = useCallback(
      (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()

        if (disabled) {
          return
        }

        const items = e.dataTransfer?.items

        let isValid = false

        if (items !== undefined && items.length > 0) {
          const itemsArray = Array.from(items)
          isValid = areItemsAccepted(itemsArray, accept ?? null)
        }

        setIsDragging(true)
        setIsDragValid(isValid)
      },
      [disabled, accept]
    )

    const handleDragLeave = useCallback(
      (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()

        setIsDragging(false)
        setIsDragValid(false)
      },
      []
    )

    const handleDragOver = useCallback(
      (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()
      },
      []
    )

    const handleDrop = useCallback(
      (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()

        setIsDragging(false)
        setIsDragValid(false)

        if (disabled) {
          return
        }

        const dt = e.dataTransfer

        if (dt === null) {
          return
        }

        if (dt.files.length === 0) {
          return
        }

        if (!multiple && dt.files.length > 1) {
          onInvalid?.('multiple')
          return
        }

        const files = Array.from(dt.files)

        if (!areFilesAccepted(files, accept ?? null)) {
          onInvalid?.('accept')
          return
        }

        if (!doFilesSatisfySize(files, maxSize ?? null)) {
          onInvalid?.('size')
          return
        }

        onChange?.(files)
      },
      [disabled, multiple, accept, maxSize, onChange, onInvalid]
    )

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files

        if (files === null || files.length === 0) {
          return
        }

        const fileArray = Array.from(files)

        if (!doFilesSatisfySize(fileArray, maxSize ?? null)) {
          onInvalid?.('size')
          // Reset the input
          e.target.value = ''
          return
        }

        onChange?.(fileArray)
        // Reset the input to allow selecting the same file again
        e.target.value = ''
      },
      [maxSize, onChange, onInvalid]
    )

    const handleButtonClick = useCallback(() => {
      if (!disabled) {
        inputRef.current?.click()
      }
    }, [disabled])

    return (
      <div
        ref={ref}
        className={cn(
          wrapperVariants({
            isInvalid: invalid,
            isDisabled: disabled,
            isDragging,
            isDragValid: isDragging && isDragValid,
            isDragInvalid: isDragging && isDragInvalid,
          }),
          className
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        {...props}
      >
        {/* Placeholder text */}
        {placeholder !== undefined && (
          <span
            className={cn(
              placeholderVariants({
                isDisabled: disabled,
                isDragValid: isDragging && isDragValid,
                isDragInvalid: isDragging && isDragInvalid,
              })
            )}
            aria-hidden="true"
          >
            {placeholder}
          </span>
        )}

        {/* Hidden file input */}
        <input
          ref={inputRef}
          type="file"
          className="sr-only"
          multiple={multiple}
          accept={accept}
          disabled={disabled}
          onChange={handleInputChange}
          aria-label="File input"
        />

        {/* Default button or children */}
        {children !== undefined ? (
          <div onClick={handleButtonClick}>{children}</div>
        ) : (
          <button
            type="button"
            onClick={handleButtonClick}
            disabled={disabled}
            className={cn(
              'inline-flex items-center justify-center',
              'px-4 py-2 rounded-md',
              'bg-surface-primary border border-border',
              'text-foreground font-sans text-sm',
              'hover:bg-surface-primary-hover',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          >
            {buttonText}
          </button>
        )}

        {/* Border overlay */}
        <div
          className={cn(
            borderVariants({
              isInvalid: invalid,
              isDisabled: disabled,
              isDragging,
              isDragValid: isDragging && isDragValid,
              isDragInvalid: isDragging && isDragInvalid,
            })
          )}
        />
      </div>
    )
  }
)
FileDrop.displayName = 'FileDrop'
