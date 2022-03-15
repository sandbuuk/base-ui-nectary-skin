import classnames from 'classnames'
import styles from './BoxBanner.module.css'
import type { FC } from 'react'

export const BoxBanner: FC<JSX.IntrinsicElements['div']> = (props) => (
  <div {...props} className={classnames(props.className, styles.root)}/>
)
