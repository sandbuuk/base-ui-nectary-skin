import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './styles.css'
import type { CSSProperties, FC } from 'react'

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
  <details className="example-code">
    <summary>{title}</summary>
    <SyntaxHighlighter language="tsx" style={style}>
      {src}
    </SyntaxHighlighter>
  </details>
)
