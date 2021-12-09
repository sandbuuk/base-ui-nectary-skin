import styles from './Page.module.css'
import { usePageControl } from './PageContext'
import type { FC } from 'react'

export const PageStepOne: FC = () => {
  const { next } = usePageControl()

  return (
    <div className={styles.page}>
      <h3>Step 1</h3>
      <div className={styles.buttonWrapper}>
        <sinch-button type="cta" text="To Step 2" onClick={next}/>
      </div>
    </div>
  )
}
