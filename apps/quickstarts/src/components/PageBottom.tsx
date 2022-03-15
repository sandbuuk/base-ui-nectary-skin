import styles from './PageBottom.module.css'
import type { FC } from 'react'

type PageBottomProps = {
  backText: string,
  backFunction: () => void,
  nextText: string,
  nextFunction: () => void,
}

export const PageBottom: FC<PageBottomProps> = (props) => {
  const { backText, backFunction, nextText, nextFunction } = props

  return (
    <div className={styles.buttons}>
      <div className={styles.backBut}>
        <sinch-button type="destructive" text={backText} onClick={backFunction}/>
      </div>
      <div className={styles.saveBut}>
        <sinch-button type="primary" text={nextText} onClick={nextFunction}/>
      </div>
    </div>
  )
}
