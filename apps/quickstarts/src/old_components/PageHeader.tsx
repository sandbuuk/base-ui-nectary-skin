import styles from './PageHeader.module.css'
import { PageSteps } from './PageSteps'
import type { FC } from 'react'

type PageHeaderProps = {
  title: string,
  description: string,
  activeStep: number,
  imageSrc: string,
}

export const PageHeader: FC<PageHeaderProps> = (props) => {
  const { title, description, activeStep, imageSrc } = props

  return (
    <div className={styles.heading}>
      <div className={styles.matter}>
        <h2 className={styles.matterHeading}>
          {title}
        </h2>
        <p className={styles.matterBody}>
          {description}
        </p>
      </div>
      <div className={styles.pageSteps}><PageSteps activeStep={activeStep}/></div>

      <div className={styles.chatlayerLogo}>
        <div className="empty"/>
        <div className="actualLogo">
          <p className={styles.poweredBy}>Powered By:</p>
          <img className={styles.chatLayer} src={imageSrc}/>
        </div>
      </div>
    </div>
  )
}
