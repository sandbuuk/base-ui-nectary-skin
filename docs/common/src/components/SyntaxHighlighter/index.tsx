import { useMemo } from 'react'
import { PrismLight } from 'react-syntax-highlighter'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import shell from 'react-syntax-highlighter/dist/esm/languages/prism/shell-session'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useThemeName } from '../../context'
import type { CSSProperties, FC } from 'react'

try {
  PrismLight.registerLanguage('tsx', tsx)
  PrismLight.registerLanguage('tsx', ts)
  PrismLight.registerLanguage('css', css)
  PrismLight.registerLanguage('shell', shell)
} catch {}

const getStyles = (theme: Record<string, CSSProperties>): Record<string, CSSProperties> => {
  return {
    ...theme,
    'code[class*="language-"]': {
      ...theme['"code[class*="language-"]"'],
      fontFamily: 'var(--sinch-ref-typography-font-family-mono)',
      fontSize: 14,
      lineHeight: '22px',
    },
    'pre[class*="language-"]': {
      ...theme['pre[class*="language-"]'],
      background: 'var(--sinch-sys-color-container-contrast-primary-default)',
      border: 'none',
      overflowX: 'auto',
      // margin: '0',
    },
  }
}

export type TSyntaxHighlighter = {
  language: string,
  src: string,
  shouldShowLineNumbers?: boolean,
}

export const SyntaxHighlighter: FC<TSyntaxHighlighter> = ({ language, src, shouldShowLineNumbers }) => {
  const { themeName } = useThemeName()

  const styles = useMemo(() => {
    return getStyles(themeName === 'dark' ? oneDark : oneLight)
  }, [themeName])

  return (
    <PrismLight
      className="syntax-highlighter"
      language={language}
      style={styles}
      showLineNumbers={shouldShowLineNumbers}
    >
      {src}
    </PrismLight>
  )
}
