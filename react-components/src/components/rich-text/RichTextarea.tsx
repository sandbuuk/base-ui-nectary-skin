import { type VariantProps, cva } from 'class-variance-authority'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cn } from '../../utils/cn'
import { parseRichText, type RichTextNode } from './utils'
import type { TagColor, ChipResolver } from './RichText'

/**
 * Selection state information
 */
export interface RichTextareaSelection {
  italic: boolean,
  bold: boolean,
  strikethrough: boolean,
  codetag: boolean,
  tag: boolean,
  link: boolean,
  ulist: boolean,
  olist: boolean,
}

/**
 * Methods exposed via ref
 */
export interface RichTextareaRef {
  focus: () => void,
  blur: () => void,
  insertText: (value: string) => void,
  insertLink: (text: string, href: string) => void,
  insertChip: (name: string) => void,
  formatBold: () => void,
  formatItalic: () => void,
  formatStrikethrough: () => void,
  formatCodeTag: () => void,
  formatOrderedList: () => void,
  formatUnorderedList: () => void,
  getCaretRect: () => DOMRect | null,
}

const wrapperVariants = cva(
  // Base styles for wrapper
  [
    'relative flex flex-col w-full box-border',
    'bg-[var(--sinch-comp-textarea-color-default-background-initial)]',
    'rounded-[var(--sinch-comp-textarea-shape-radius)]',
    'overflow-hidden',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

const inputVariants = cva(
  // Base styles for the editable area
  [
    'w-full px-3 py-2 box-border',
    'bg-transparent outline-none border-none',
    'whitespace-pre-wrap break-words',
    '[font:var(--sinch-comp-textarea-font-input)]',
    'text-[var(--sinch-comp-textarea-color-default-text-initial)]',
    'min-h-[2.5em]',
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
      {
        isFocused: true,
        isInvalid: true,
        className: 'border-[var(--sinch-comp-textarea-color-default-border-focus)]',
      },
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

export interface RichTextareaProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
  VariantProps<typeof wrapperVariants> {
  /**
   * Controlled value (markdown text)
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
   * Number of visible rows
   */
  rows?: number,
  /**
   * Default color for chips
   */
  chipColor?: TagColor,
  /**
   * Default icon for chips
   */
  chipIcon?: string,
  /**
   * Resolver callback for chip properties based on tag name
   */
  chipResolver?: ChipResolver,
  /**
   * Accessible label
   */
  'aria-label'?: string,
  /**
   * Content displayed in the top slot
   */
  topContent?: React.ReactNode,
  /**
   * Content displayed in the bottom slot
   */
  bottomContent?: React.ReactNode,
  /**
   * Change handler - receives the new markdown value
   */
  onChange?: (value: string) => void,
  /**
   * Focus handler
   */
  onFocus?: () => void,
  /**
   * Blur handler
   */
  onBlur?: () => void,
  /**
   * Selection change handler
   */
  onSelectionChange?: (selection: RichTextareaSelection) => void,
}

/**
 * RichTextarea component for editing rich text with formatting support.
 *
 * Features:
 * - contentEditable-based editing
 * - Keyboard shortcuts (Cmd/Ctrl+B for bold, Cmd/Ctrl+I for italic)
 * - Markdown output format
 * - Chip/tag insertion
 * - Link insertion
 *
 * @example
 * ```tsx
 * <RichTextarea
 *   value={text}
 *   onChange={setText}
 *   placeholder="Type something..."
 * />
 * ```
 */
export const RichTextarea = forwardRef<RichTextareaRef, RichTextareaProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue,
      placeholder,
      invalid = false,
      disabled = false,
      rows,
      chipColor,
      chipIcon,
      chipResolver,
      'aria-label': ariaLabel,
      topContent,
      bottomContent,
      onChange,
      onFocus,
      onBlur,
      onSelectionChange,
      ...props
    },
    ref
  ) => {
    // Internal state
    const [internalValue, setInternalValue] = useState(defaultValue ?? '')
    const [isFocused, setIsFocused] = useState(false)
    const editorRef = useRef<HTMLDivElement>(null)

    // Determine if controlled
    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    // Parse value into nodes for rendering
    const nodes = useMemo(() => parseRichText(value), [value])

    // Serialize editor content to markdown
    const serializeToMarkdown = useCallback((): string => {
      const editor = editorRef.current

      if (editor === null) {
        return ''
      }

      // Simple serialization - convert HTML back to markdown
      const html = editor.innerHTML
      let markdown = html

      // Replace common HTML with markdown
      markdown = markdown.replace(/<br\s*\/?>/gi, '\n')
      markdown = markdown.replace(/<\/p>\s*<p[^>]*>/gi, '\n\n')
      markdown = markdown.replace(/<\/?p[^>]*>/gi, '')
      markdown = markdown.replace(/<strong>([^<]*)<\/strong>/gi, '**$1**')
      markdown = markdown.replace(/<b>([^<]*)<\/b>/gi, '**$1**')
      markdown = markdown.replace(/<em>([^<]*)<\/em>/gi, '*$1*')
      markdown = markdown.replace(/<i>([^<]*)<\/i>/gi, '*$1*')
      markdown = markdown.replace(/<del>([^<]*)<\/del>/gi, '~~$1~~')
      markdown = markdown.replace(/<s>([^<]*)<\/s>/gi, '~~$1~~')
      markdown = markdown.replace(/<code>([^<]*)<\/code>/gi, '`$1`')
      markdown = markdown.replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/gi, '[$2]($1)')
      markdown = markdown.replace(/<span[^>]*data-chip[^>]*>([^<]*)<\/span>/gi, '{{$1}}')
      markdown = markdown.replace(/<[^>]+>/g, '') // Remove remaining tags
      markdown = markdown.replace(/&nbsp;/g, ' ')
      markdown = markdown.replace(/&lt;/g, '<')
      markdown = markdown.replace(/&gt;/g, '>')
      markdown = markdown.replace(/&amp;/g, '&')

      return markdown.trim()
    }, [])

    // Update editor content from value
    useEffect(() => {
      const editor = editorRef.current

      if (editor === null || document.activeElement === editor) {
        return
      }

      // Only update if content differs to avoid cursor jumps
      const currentMarkdown = serializeToMarkdown()

      if (currentMarkdown !== value) {
        editor.innerHTML = renderNodesToHTML(nodes, chipColor, chipIcon, chipResolver)
      }
    }, [value, nodes, chipColor, chipIcon, chipResolver, serializeToMarkdown])

    // Handle input events
    const handleInput = useCallback(() => {
      const newValue = serializeToMarkdown()

      if (!isControlled) {
        setInternalValue(newValue)
      }

      onChange?.(newValue)
    }, [isControlled, onChange, serializeToMarkdown])

    // Handle focus
    const handleFocus = useCallback(() => {
      setIsFocused(true)
      onFocus?.()
    }, [onFocus])

    // Handle blur
    const handleBlur = useCallback(() => {
      setIsFocused(false)
      onBlur?.()

      // Final sync on blur
      const newValue = serializeToMarkdown()

      if (newValue !== value) {
        if (!isControlled) {
          setInternalValue(newValue)
        }

        onChange?.(newValue)
      }
    }, [isControlled, onBlur, onChange, serializeToMarkdown, value])

    // Handle keyboard shortcuts
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
      if (disabled) {
        e.preventDefault()

        return
      }

      const isMod = e.metaKey || e.ctrlKey

      if (isMod) {
        switch (e.key.toLowerCase()) {
          case 'b':
            e.preventDefault()
            document.execCommand('bold')
            handleInput()

            break
          case 'i':
            e.preventDefault()
            document.execCommand('italic')
            handleInput()

            break
        }

        if (e.shiftKey) {
          switch (e.key.toLowerCase()) {
            case 'x':
              e.preventDefault()
              document.execCommand('strikeThrough')
              handleInput()

              break
          }
        }
      }
    }, [disabled, handleInput])

    // Handle paste - strip formatting
    const handlePaste = useCallback((e: React.ClipboardEvent) => {
      e.preventDefault()
      const text = e.clipboardData.getData('text/plain')

      document.execCommand('insertText', false, text)
      handleInput()
    }, [handleInput])

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
      focus: () => editorRef.current?.focus(),
      blur: () => editorRef.current?.blur(),
      insertText: (text: string) => {
        editorRef.current?.focus()
        document.execCommand('insertText', false, text)
        handleInput()
      },
      insertLink: (text: string, href: string) => {
        editorRef.current?.focus()
        document.execCommand('insertHTML', false, `<a href="${href}">${text}</a>`)
        handleInput()
      },
      insertChip: (name: string) => {
        editorRef.current?.focus()
        const chipHTML = `<span data-chip contenteditable="false">${name}</span>&nbsp;`

        document.execCommand('insertHTML', false, chipHTML)
        handleInput()
      },
      formatBold: () => {
        editorRef.current?.focus()
        document.execCommand('bold')
        handleInput()
      },
      formatItalic: () => {
        editorRef.current?.focus()
        document.execCommand('italic')
        handleInput()
      },
      formatStrikethrough: () => {
        editorRef.current?.focus()
        document.execCommand('strikeThrough')
        handleInput()
      },
      formatCodeTag: () => {
        // Code formatting not directly supported by execCommand
        editorRef.current?.focus()
        const selection = window.getSelection()

        if (selection !== null && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0)
          const selectedText = range.toString()

          if (selectedText.length > 0) {
            document.execCommand('insertHTML', false, `<code>${selectedText}</code>`)
            handleInput()
          }
        }
      },
      formatOrderedList: () => {
        editorRef.current?.focus()
        document.execCommand('insertOrderedList')
        handleInput()
      },
      formatUnorderedList: () => {
        editorRef.current?.focus()
        document.execCommand('insertUnorderedList')
        handleInput()
      },
      getCaretRect: () => {
        const selection = window.getSelection()

        if (selection === null || selection.rangeCount === 0) {
          return null
        }

        return selection.getRangeAt(0).getBoundingClientRect()
      },
    }), [handleInput])

    const hasTopContent = topContent !== undefined
    const hasBottomContent = bottomContent !== undefined
    const isEmpty = value === ''

    // Calculate min height based on rows
    const minHeight = rows !== undefined && rows > 0 ? `${rows * 1.5}em` : undefined

    return (
      <div
        className={cn(wrapperVariants({}), className)}
        {...props}
      >
        {/* Top slot */}
        {hasTopContent && (
          <div className="flex flex-row items-center gap-2 px-1 pt-1 pb-0">
            {topContent}
          </div>
        )}

        {/* Input wrapper */}
        <div className="relative px-[10px] py-2 box-border">
          {/* Editable area */}
          <div
            ref={editorRef}
            role="textbox"
            aria-multiline="true"
            aria-label={ariaLabel}
            aria-placeholder={placeholder}
            aria-invalid={invalid}
            contentEditable={!disabled}
            suppressContentEditableWarning
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            className={cn(
              inputVariants({}),
              disabled && 'text-[var(--sinch-comp-textarea-color-disabled-text-initial)] cursor-not-allowed',
              // Inline styles for formatting
              '[&_b]:font-bold [&_strong]:font-bold',
              '[&_i]:italic [&_em]:italic',
              '[&_s]:line-through [&_del]:line-through',
              '[&_code]:[font:var(--sinch-comp-code-tag-font-text)]',
              '[&_code]:bg-[var(--sinch-comp-code-tag-color-default-background-initial)]',
              '[&_code]:border [&_code]:border-[var(--sinch-comp-code-tag-color-default-border-initial)]',
              '[&_code]:px-[0.25em] [&_code]:rounded-[var(--sinch-comp-code-tag-shape-radius)]',
              '[&_a]:text-[var(--sinch-comp-link-color-default-text-initial)]',
              '[&_a]:underline',
              '[&_[data-chip]]:inline-flex [&_[data-chip]]:items-center [&_[data-chip]]:align-middle',
              '[&_[data-chip]]:h-[var(--sinch-comp-chip-size-container-m)]',
              '[&_[data-chip]]:px-[9px] [&_[data-chip]]:gap-1',
              '[&_[data-chip]]:rounded-[var(--sinch-comp-chip-shape-radius)]',
              '[&_[data-chip]]:bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]',
              '[&_[data-chip]]:text-[var(--sinch-comp-chip-color-neutral-default-foreground-initial)]',
              '[&_[data-chip]]:[font:var(--sinch-comp-chip-font-size-m-label)]',
              '[&_[data-chip]]:select-none',
            )}
            style={{ minHeight }}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
          />

          {/* Placeholder */}
          {isEmpty && placeholder !== undefined && (
            <div
              className={cn(
                'absolute left-0 top-0 px-3 py-2',
                '[font:var(--sinch-comp-textarea-font-input)]',
                'text-[var(--sinch-comp-textarea-color-default-text-placeholder)]',
                'pointer-events-none select-none'
              )}
            >
              {placeholder}
            </div>
          )}
        </div>

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

        {/* Bottom slot */}
        {hasBottomContent && (
          <div className="flex flex-row items-center gap-2 px-1 pt-0 pb-1">
            {bottomContent}
          </div>
        )}
      </div>
    )
  }
)
RichTextarea.displayName = 'RichTextarea'

/**
 * Render nodes to HTML for the editor
 */
function renderNodesToHTML(
  nodes: RichTextNode[],
  chipColor?: TagColor,
  _chipIcon?: string,
  chipResolver?: ChipResolver
): string {
  const renderNode = (node: RichTextNode): string => {
    switch (node.type) {
      case 'text':
        return escapeHTML(node.content ?? '')

      case 'bold':
        return `<b>${node.children?.map(renderNode).join('') ?? ''}</b>`

      case 'italic':
        return `<i>${node.children?.map(renderNode).join('') ?? ''}</i>`

      case 'strikethrough':
        return `<s>${node.children?.map(renderNode).join('') ?? ''}</s>`

      case 'code':
        return `<code>${escapeHTML(node.content ?? '')}</code>`

      case 'link':
        return `<a href="${escapeHTML(node.href ?? '')}">${escapeHTML(node.content ?? '')}</a>`

      case 'chip': {
        const resolved = chipResolver?.(node.content ?? '')
        const color = resolved?.color ?? chipColor

        let style = ''

        if (color !== undefined) {
          style = ` style="background-color:var(--sinch-comp-tag-color-${color}-background);color:var(--sinch-comp-tag-color-${color}-foreground)"`
        }

        return `<span data-chip contenteditable="false"${style}>${escapeHTML(node.content ?? '')}</span>`
      }

      case 'emoji':
        return node.content ?? ''

      case 'linebreak':
        return '<br>'

      case 'paragraph':
        return `<p>${node.children?.map(renderNode).join('') ?? ''}</p>`

      case 'list':
        if (node.ordered === true) {
          return `<ol>${node.children?.map(renderNode).join('') ?? ''}</ol>`
        }

        return `<ul>${node.children?.map(renderNode).join('') ?? ''}</ul>`

      case 'listItem':
        return `<li>${node.children?.map(renderNode).join('') ?? ''}</li>`

      default:
        return ''
    }
  }

  return nodes.map(renderNode).join('')
}

/**
 * Escape HTML special characters
 */
function escapeHTML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
