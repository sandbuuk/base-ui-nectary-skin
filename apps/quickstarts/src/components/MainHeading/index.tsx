import styles from './MainHeading.module.css'
import type { FC } from 'react'

export const MainHeading: FC = ({ children }) => (
  <h2 className={styles.root}>{children}</h2>
)
