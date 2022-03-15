import styles from './MessageTyping.module.css'
import type { FC } from 'react'

export const MessageTyping: FC = (): JSX.Element => {
  return (
    <div className={styles.typing}>
      <span/>
      <span/>
      <span/>
    </div>
  )
}

