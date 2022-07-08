import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './styles.css'
import type { FC } from 'react'

export type TCode = {
  src: string,
  title: string,
}

export const Code: FC<TCode> = ({ src, title }) => (
  <details className="example-code">
    <summary>{title}</summary>
    <SyntaxHighlighter language="ts" style={dracula}>
      {src}
    </SyntaxHighlighter>
  </details>
)
