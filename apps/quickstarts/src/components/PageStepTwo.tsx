import styles from './Page.module.css'
import { usePageControl } from './PageContext'
import type { FC } from 'react'

export const PageStepTwo: FC = () => {
  const { next } = usePageControl()

  return (
    <div className={styles.page}>
      <h3>Step 2</h3>
      <div className={styles.buttonWrapper}>
        <sinch-button type="cta" text="To Step 3" onClick={next}/>
      </div>
    </div>
  )
}
