import { Prism } from 'react-syntax-highlighter'
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { CSSProperties, FC } from 'react'

const style: Record<string, CSSProperties> = {
  ...ghcolors,
  'code[class*="language-"]': {
    ...ghcolors['"code[class*="language-"]"'],
    fontFamily: 'monospace',
  },
  'pre[class*="language-"]': {
    ...ghcolors['pre[class*="language-"]'],
    fontFamily: 'monospace',
    fontSize: 14,
  },
}

export type TSyntaxHighlighter = {
  language: string,
  src: string,
}

export const SyntaxHighlighter: FC<TSyntaxHighlighter> = ({ language, src }) => (
  <Prism className="syntax-highlighter" language={language} style={style}>
    {src}
  </Prism>
)
