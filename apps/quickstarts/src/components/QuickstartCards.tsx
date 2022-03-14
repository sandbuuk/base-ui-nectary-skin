
import styles from './Card.module.css'
import type { FC } from 'react'

type QuickstartCardsProps = {
  clickFunction: () => void,
  mainTag: {text: string, category: number },
  descriptionTags: {text: string, category: number}[],
  headerTitle: string,
  headerBody: string,
  mainBody: string,
  imageSource: string| undefined,
  bgColor: string,
  headerColor: string,
}

export const QuickstartCards: FC<QuickstartCardsProps> = (props): JSX.Element => {
  const { clickFunction, bgColor, mainTag, descriptionTags, headerTitle, headerBody, mainBody, imageSource, headerColor } = props
  const categoryValues = ['candy', 'bolt', 'aqua', 'grass', 'berry', 'orange', 'night', 'mud', 'dirt'] as const

  return (
    <div className={styles.HomeContainer1}>
      <div style={{ backgroundColor: bgColor }} className={styles.HomeCard1}>
        <div className={styles.cardimage1}>
          <img className={styles.card1} src={imageSource}/>
        </div>
        <sinch-tag style={{ marginLeft: '5%' }} text={mainTag.text} category={categoryValues[mainTag.category]}/>
        <p className={styles.HomeCard1Title} style={{ color: headerColor }}>{headerTitle}</p>
        <p className={styles.HomeCard1Body} style={{ color: headerColor }}>{headerBody}</p>
      </div>
      <div className={styles.Homecard1Matter}>
        <p className={styles.Homecard1MatterContent}>{mainBody}</p>
      </div>
      <div className={styles.homeTags}>
        { descriptionTags.map((tag, i) => {
          return (
            <sinch-tag
              key={tag.text}
              style={{ marginLeft: i === 0 ? '5%' : '3%' }}
              text={tag.text}
              category={categoryValues[tag.category]}
              small
            />
          )
        })}
      </div>
      <div className={styles.Card1Button}>
        <sinch-button style={{ marginTop: '20%' }} type="secondary" text="Try for free" onClick={clickFunction}/>
      </div>
    </div>
  )
}
