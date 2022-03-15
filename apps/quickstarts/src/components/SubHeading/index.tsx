import styles from './SubHeading.module.css'
import type { FC } from 'react'

export const SubHeading: FC = ({ children }) => (
  <p className={styles.root}>{children}</p>
)
