import { SyntaxHighlighter } from 'docs-shared'
import { useState } from 'react'
import type { FC } from 'react'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary-assets/icons/content-copy'
import '@sinch-engage/nectary-assets/icons/keyboard-arrow-down'
import './styles.css'

export type TCode = {
  src: string,
}

export const Code: FC<TCode> = ({ src }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={`code ${isOpen ? 'open' : ''}`} {...(isOpen ? {} : { onClick: () => setOpen(true) })}>
      <div className="code-toolbar">
        <sinch-icon-button
          aria-label="Copy"
          size="s"
          on-click={() => navigator.clipboard.writeText(src).catch(console.error)}
        >
          <sinch-icon-content-copy slot="icon"/>
        </sinch-icon-button>
        <sinch-icon-button
          aria-label="Expand"
          size="s"
          on-click={() => {
            setOpen((v) => !v)
          }}
        >
          <sinch-icon-keyboard-arrow-down slot="icon" class="code-toolbar-dropdown-icon"/>
        </sinch-icon-button>
      </div>
      <SyntaxHighlighter language="tsx" src={src} isExample/>
    </div>
  )
}
