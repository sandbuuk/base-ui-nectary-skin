import styles from './TagGroup.module.css'
import type { FC } from 'react'

export const TagGroup: FC = ({ children }) => <div className={styles.root}>{children}</div>
