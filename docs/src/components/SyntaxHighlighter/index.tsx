import { PrismLight } from 'react-syntax-highlighter'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import shell from 'react-syntax-highlighter/dist/esm/languages/prism/shell-session'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { CSSProperties, FC } from 'react'

PrismLight.registerLanguage('tsx', tsx)
PrismLight.registerLanguage('tsx', ts)
PrismLight.registerLanguage('css', css)
PrismLight.registerLanguage('shell', shell)

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
  <PrismLight className="syntax-highlighter" language={language} style={style}>
    {src}
  </PrismLight>
)
