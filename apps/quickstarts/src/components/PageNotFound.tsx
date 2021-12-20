import styles from './Page.module.css'
import { usePageControl } from './PageContext'
import type { FC } from 'react'
import '@nectary/components/button'

export const PageNotFound: FC = () => {
  const { reset } = usePageControl()

  return (
    <div className={styles.page}>
      <h3>Not found</h3>
      <div className={styles.buttonWrapper}>
        <sinch-button type="primary" text="Reset" onClick={reset}/>
      </div>
    </div>
  )
}
