import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { CSSProperties, FC } from 'react'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/content-copy'
import './styles.css'

const style: Record<string, CSSProperties> = {
  ...dracula,
  'code[class*="language-"]': {
    ...dracula['"code[class*="language-"]"'],
    fontFamily: 'monospace',
  },
  'pre[class*="language-"]': {
    ...dracula['pre[class*="language-"]'],
    fontFamily: 'monospace',
  },
}

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
        small
        onClick={() => navigator.clipboard.writeText(src).catch(console.error)}
      >
        <sinch-icon-content-copy slot="icon"/>
      </sinch-icon-button>
      <SyntaxHighlighter language="tsx" style={style}>
        {src}
      </SyntaxHighlighter>
    </div>
  </details>
)
