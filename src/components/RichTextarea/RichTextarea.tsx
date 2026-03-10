import { useRef, useCallback } from 'react'
import type { RichTextareaProps } from './RichTextarea.types'
import styles from './RichTextarea.module.css'

export function RichTextarea({
  value = '',
  onValueChange,
  placeholder = '',
  disabled = false,
  className,
  style,
}: RichTextareaProps) {
  const editorRef = useRef<HTMLDivElement>(null)

  const execCommand = useCallback((command: string, val?: string) => {
    document.execCommand(command, false, val)
    if (editorRef.current && onValueChange) {
      onValueChange(editorRef.current.innerHTML)
    }
  }, [onValueChange])

  const handleInput = useCallback(() => {
    if (editorRef.current && onValueChange) {
      onValueChange(editorRef.current.innerHTML)
    }
  }, [onValueChange])

  const handleLink = useCallback(() => {
    const url = window.prompt('Enter URL:')
    if (url) {
      execCommand('createLink', url)
    }
  }, [execCommand])

  const classes = [styles.root, disabled ? styles.disabled : undefined, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} style={style}>
      <div className={styles.toolbar} role="toolbar" aria-label="Formatting">
        <button
          type="button"
          className={styles.toolbarButton}
          onClick={() => execCommand('bold')}
          aria-label="Bold"
          tabIndex={-1}
        >
          B
        </button>
        <button
          type="button"
          className={styles.toolbarButton}
          onClick={() => execCommand('italic')}
          aria-label="Italic"
          tabIndex={-1}
          style={{ fontStyle: 'italic' }}
        >
          I
        </button>
        <div className={styles.separator} />
        <button
          type="button"
          className={styles.toolbarButton}
          onClick={() => execCommand('insertUnorderedList')}
          aria-label="Bullet list"
          tabIndex={-1}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <circle cx="3" cy="4" r="1.5" fill="currentColor" />
            <circle cx="3" cy="8" r="1.5" fill="currentColor" />
            <circle cx="3" cy="12" r="1.5" fill="currentColor" />
            <line x1="7" y1="4" x2="14" y2="4" stroke="currentColor" strokeWidth="1.5" />
            <line x1="7" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" />
            <line x1="7" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <button
          type="button"
          className={styles.toolbarButton}
          onClick={() => execCommand('insertOrderedList')}
          aria-label="Numbered list"
          tabIndex={-1}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <text x="1" y="5.5" fill="currentColor" fontSize="6" fontWeight="600">1</text>
            <text x="1" y="9.5" fill="currentColor" fontSize="6" fontWeight="600">2</text>
            <text x="1" y="13.5" fill="currentColor" fontSize="6" fontWeight="600">3</text>
            <line x1="7" y1="4" x2="14" y2="4" stroke="currentColor" strokeWidth="1.5" />
            <line x1="7" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" />
            <line x1="7" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <div className={styles.separator} />
        <button
          type="button"
          className={styles.toolbarButton}
          onClick={handleLink}
          aria-label="Insert link"
          tabIndex={-1}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M6.5 9.5a3 3 0 004.24 0l2-2a3 3 0 00-4.24-4.24L7.5 4.26"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9.5 6.5a3 3 0 00-4.24 0l-2 2a3 3 0 004.24 4.24L8.5 11.74"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div
        ref={editorRef}
        className={styles.editor}
        contentEditable={!disabled}
        role="textbox"
        aria-multiline="true"
        aria-label="Rich text editor"
        aria-disabled={disabled}
        data-placeholder={placeholder}
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: value }}
        suppressContentEditableWarning
      />
    </div>
  )
}
