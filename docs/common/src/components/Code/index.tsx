import { useState } from 'react'
import { SyntaxHighlighter } from '../SyntaxHighlighter'
import type { FC } from 'react'
import '@nectary/components/button'
import '@nectary/assets/icons/content-copy'
import '@nectary/assets/icons/keyboard-arrow-down'
import './styles.css'

export type TCode = {
  src: string,
}

export const Code: FC<TCode> = ({ src }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={`code ${isOpen ? 'open' : ''}`} onClick={!isOpen ? () => setOpen(true) : void 0}>
      <div className="code-toolbar">
        <sinch-button
          aria-label="Copy"
          size="s"
          on-click={() => navigator.clipboard.writeText(src).catch(console.error)}
        >
          <sinch-icon-content-copy slot="icon"/>
        </sinch-button>
        <sinch-button
          aria-label="Expand"
          size="s"
          on-click={() => {
            setOpen((v) => !v)
          }}
        >
          <sinch-icon-keyboard-arrow-down slot="icon" class="code-toolbar-dropdown-icon"/>
        </sinch-button>
      </div>
      <SyntaxHighlighter language="tsx" src={src} shouldShowLineNumbers/>
    </div>
  )
}
