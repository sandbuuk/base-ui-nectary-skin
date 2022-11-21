import { SyntaxHighlighter } from '../SyntaxHighlighter'
import type { FC } from 'react'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/content-copy'
import './styles.css'

export type TCode = {
  src: string,
  title: string,
}

export const Code: FC<TCode> = ({ src, title }) => (
  <details className="code">
    <summary className="code-title">{title}</summary>
    <div className="code-content">
      <sinch-icon-button
        aria-label="Copy"
        class="code-copy"
        size="s"
        onClick={() => navigator.clipboard.writeText(src).catch(console.error)}
      >
        <sinch-icon-content-copy slot="icon"/>
      </sinch-icon-button>
      <SyntaxHighlighter language="tsx" src={src}/>
    </div>
  </details>
)
