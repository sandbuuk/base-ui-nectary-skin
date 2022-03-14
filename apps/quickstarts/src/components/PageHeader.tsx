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
    <div className={styles.botwhatsappHeading}>
      <div className={styles.botwhatsappMatter}>
        <h2 className={styles.botwhatsappMatterHeading}>
          {title}
        </h2>
        <p className={styles.botwhatsappMatterBody}>
          {description}
        </p>
      </div>
      <div className={styles.botpageSteps}><PageSteps activeStep={activeStep}/></div>

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
