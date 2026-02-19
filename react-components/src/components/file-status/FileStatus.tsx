import { type VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { Icon } from '../icon'
import { Spinner } from '../spinner'
import { Text } from '../text'

/**
 * File status type determines the background color and icon.
 */
export type FileStatusType = 'pending' | 'loading' | 'progress' | 'success' | 'error'

const fileStatusWrapperVariants = cva(
  // Base styles matching template.html #wrapper styles
  [
    'flex',
    'flex-row',
    'items-start',
    'py-3',
    'px-4',
    'box-border',
    'min-h-[48px]',
    'min-w-[148px]',
    'rounded-[var(--sinch-comp-file-status-shape-radius)]',
  ],
  {
    variants: {
      type: {
        pending: 'bg-[var(--sinch-comp-file-status-color-pending-background)]',
        loading: 'bg-[var(--sinch-comp-file-status-color-loading-background)]',
        progress: 'bg-[var(--sinch-comp-file-status-color-progress-background)]',
        success: 'bg-[var(--sinch-comp-file-status-color-success-background)]',
        error: 'bg-[var(--sinch-comp-file-status-color-error-background)]',
      },
    },
    defaultVariants: {
      type: 'pending',
    },
  }
)

const iconColorMap = {
  pending: 'var(--sinch-comp-file-status-color-pending-icon)',
  loading: 'var(--sinch-comp-file-status-color-loading-icon)',
  progress: 'var(--sinch-comp-file-status-color-progress-icon)',
  success: 'var(--sinch-comp-file-status-color-success-icon)',
  error: 'var(--sinch-comp-file-status-color-error-icon)',
} as const

const textColorMap = {
  pending: 'var(--sinch-comp-file-status-color-pending-text)',
  loading: 'var(--sinch-comp-file-status-color-loading-text)',
  progress: 'var(--sinch-comp-file-status-color-progress-text)',
  success: 'var(--sinch-comp-file-status-color-success-text)',
  error: 'var(--sinch-comp-file-status-color-error-text)',
} as const

const iconNameMap = {
  pending: 'fa-clipboard-question',
  loading: null, // Uses Spinner instead
  progress: 'fa-file-lines',
  success: 'circle-check',
  error: 'octagon-exclamation',
} as const

export interface FileStatusProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'content'>,
  VariantProps<typeof fileStatusWrapperVariants> {
  /**
   * File status type determines the background color and icon
   * @default 'pending'
   */
  type?: FileStatusType,
  /**
   * File name to display
   */
  filename?: string,
  /**
   * Optional content slot (additional info below filename)
   */
  content?: React.ReactNode,
  /**
   * Optional action slot (e.g., buttons)
   */
  action?: React.ReactNode,
}

/**
 * FileStatus component for displaying file upload/processing status.
 *
 * Shows a file status indicator with:
 * - Status-specific icon (spinner for loading, icons for other states)
 * - Filename with appropriate text color
 * - Optional additional content
 * - Optional action buttons
 *
 * @example
 * ```tsx
 * // Pending file
 * <FileStatus type="pending" filename="document.pdf" />
 *
 * // Loading file with action
 * <FileStatus
 *   type="loading"
 *   filename="uploading.jpg"
 *   action={<button>Cancel</button>}
 * />
 *
 * // Error with content
 * <FileStatus
 *   type="error"
 *   filename="failed.doc"
 *   content="Upload failed. Please try again."
 * />
 * ```
 */
export const FileStatus = forwardRef<HTMLDivElement, FileStatusProps>(
  ({ className, type = 'pending', filename, content, action, ...props }, ref) => {
    const iconColor = iconColorMap[type]
    const textColor = textColorMap[type]
    const iconName = iconNameMap[type]
    const hasContent = content !== undefined && content !== null

    return (
      <div
        ref={ref}
        className={cn(fileStatusWrapperVariants({ type }), className)}
        {...props}
      >
        {/* Icon or Spinner */}
        {type === 'loading' ? (
          <Spinner size="m" style={{ color: iconColor }} />
        ) : (
          <Icon
            name={iconName!}
            iconsVersion="2"
            size="md"
            style={{ color: iconColor }}
          />
        )}

        {/* Content wrapper */}
        <div className="flex flex-col gap-2 flex-1 min-w-0 min-h-[24px] ml-4">
          <Text
            type="m"
            ellipsis
            emphasized={hasContent}
            style={{ color: textColor }}
          >
            {filename}
          </Text>
          {content}
        </div>

        {/* Action slot */}
        {action && (
          <div className="flex gap-1 h-8 -mt-1 -mb-1">
            {action}
          </div>
        )}
      </div>
    )
  }
)
FileStatus.displayName = 'FileStatus'
