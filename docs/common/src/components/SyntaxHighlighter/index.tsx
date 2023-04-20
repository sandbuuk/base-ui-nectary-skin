import { PrismLight } from 'react-syntax-highlighter'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import shell from 'react-syntax-highlighter/dist/esm/languages/prism/shell-session'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { CSSProperties, FC } from 'react'

try {
  PrismLight.registerLanguage('tsx', tsx)
  PrismLight.registerLanguage('tsx', ts)
  PrismLight.registerLanguage('css', css)
  PrismLight.registerLanguage('shell', shell)
} catch {}

const style: Record<string, CSSProperties> = {
  ...ghcolors,
  'code[class*="language-"]': {
    ...ghcolors['"code[class*="language-"]"'],
    font: 'var(--sinch-sys-font-body-monospace-s)',
    fontSize: 14,
    lineHeight: '22px',
  },
  'pre[class*="language-"]': {
    ...ghcolors['pre[class*="language-"]'],
    font: 'var(--sinch-sys-font-body-monospace-s)',
  },
}

const exampleStyle: Record<string, CSSProperties> = {
  ...style,
  'pre[class*="language-"]': {
    background: 'none',
    border: 'none',
    // margin: '0',
  },
}

export type TSyntaxHighlighter = {
  language: string,
  src: string,
  isExample?: boolean,
}

export const SyntaxHighlighter: FC<TSyntaxHighlighter> = ({ language, src, isExample }) => (
  <PrismLight
    className="syntax-highlighter"
    language={language}
    style={isExample === true ? exampleStyle : style}
    showLineNumbers={isExample}
  >
    {src}
  </PrismLight>
)
