import { forwardRef, useCallback, useRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

export type FilePickerInvalidType = 'size'

export interface FilePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onInvalid'> {
  /** Allows to choose multiple files */
  multiple?: boolean
  /** A unique file type specifier (e.g., ".jpg,.png", "image/*") */
  accept?: string
  /** Max file size in bytes */
  maxSize?: number
  /** Called when valid files are selected */
  onChange?: (files: File[]) => void
  /** Called when validation fails (e.g., file too large) */
  onInvalid?: (type: FilePickerInvalidType) => void
  /** Content to render as the click target (button, etc.) */
  children?: ReactNode
}

/**
 * Checks if all files satisfy the size constraint
 */
const doFilesSatisfySize = (files: File[], size: number | null | undefined): boolean => {
  if (size === null || size === undefined || size <= 0) {
    return true
  }
  return files.every((file) => file.size <= size)
}

/**
 * FilePicker wraps any clickable element and opens the native file picker when clicked.
 * It handles file selection, validation, and calls the appropriate callbacks.
 */
export const FilePicker = forwardRef<HTMLDivElement, FilePickerProps>(
  (
    {
      className,
      children,
      multiple,
      accept,
      maxSize,
      onChange,
      onInvalid,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = useCallback(() => {
      inputRef.current?.click()
    }, [])

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files
        if (fileList === null) {
          return
        }

        const files = Array.from(fileList)

        // Reset value to allow picking same files again
        e.target.value = ''

        if (!doFilesSatisfySize(files, maxSize)) {
          onInvalid?.('size')
          return
        }

        onChange?.(files)
      },
      [maxSize, onChange, onInvalid]
    )

    return (
      <div
        ref={ref}
        className={cn('inline-block', className)}
        {...props}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept={accept}
          onChange={handleInputChange}
        />
        <div onClick={handleClick} className="cursor-pointer">
          {children}
        </div>
      </div>
    )
  }
)
FilePicker.displayName = 'FilePicker'
