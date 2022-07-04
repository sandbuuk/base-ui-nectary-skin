import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { FC } from 'react'

export type TPrint = {
  code: string,
  title: string,
}

export const Print: FC<TPrint> = ({ code, title }) => (
  <details>
    <summary>{title}</summary>
    <SyntaxHighlighter language="typescript" style={dracula}>
      {code}
    </SyntaxHighlighter>
  </details>
)
