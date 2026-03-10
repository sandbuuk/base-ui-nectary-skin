import { Separator as BaseSeparator } from '@base-ui-components/react/separator'
import type { SeparatorProps } from './Separator.types'
import styles from './Separator.module.css'

export function Separator({
  orientation = 'horizontal',
  className,
  style,
}: SeparatorProps) {
  const classes = [styles.root, styles[orientation], className]
    .filter(Boolean)
    .join(' ')

  return <BaseSeparator className={classes} style={style} />
}
