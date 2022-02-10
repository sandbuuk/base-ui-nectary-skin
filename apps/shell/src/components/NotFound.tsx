import styles from './NotFound.module.css'
import type { FC } from 'react'

export type TNotFound = {
  title?: string,
}

export const NotFound: FC<TNotFound> = ({ title = 'NotFound' }) => {
  return (
    <div className={styles.notFound}>
      <h3>{title}</h3>
    </div>
  )
}
