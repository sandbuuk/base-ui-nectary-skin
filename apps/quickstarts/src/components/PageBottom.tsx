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
    <div className={styles.botbuttons}>
      <div className={styles.botbackBut}>
        <sinch-button type="destructive" text={backText} onClick={backFunction}/>
      </div>
      <div className={styles.botsaveBut}>
        <sinch-button type="primary" text={nextText} onClick={nextFunction}/>
      </div>
    </div>
  )
}
