import styles from './MessageTyping.module.css'
import type { FC } from 'react'

export const MessageTyping: FC = (): JSX.Element => {
  return (
    <div className={styles.typing} style={{ display: 'flex' }}>
      <span/>
      <span/>
      <span/>
    </div>
  )
}

