import styles from './Page.module.css'
import { usePageControl } from './PageContext'
import type { FC } from 'react'

export const PageStepThree: FC = () => {
  const { reset } = usePageControl()

  return (
    <div className={styles.page}>
      <h3>Step 3</h3>
      <div className={styles.buttonWrapper}>
        <sinch-button type="secondary" text="Reset" onClick={reset}/>
      </div>
    </div>
  )
}
