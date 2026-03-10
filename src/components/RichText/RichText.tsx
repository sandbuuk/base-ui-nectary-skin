import type { RichTextProps } from './RichText.types'
import styles from './RichText.module.css'

export function RichText({ content = '', className, style }: RichTextProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      style={style}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
