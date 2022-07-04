import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { FC } from 'react'

export type TPrint = {
  code: string,
}

export const Print: FC<TPrint> = ({ code }) => {
  return (
    <details>
      <summary>Code</summary>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {code}
      </SyntaxHighlighter>
    </details>
  )
}
