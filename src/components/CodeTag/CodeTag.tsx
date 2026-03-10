import type { CodeTagProps } from './CodeTag.types'
import styles from './CodeTag.module.css'

export function CodeTag({
  text,
  children,
  className,
  style,
}: CodeTagProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')

  return (
    <code className={classes} style={style}>
      {text ?? children}
    </code>
  )
}
