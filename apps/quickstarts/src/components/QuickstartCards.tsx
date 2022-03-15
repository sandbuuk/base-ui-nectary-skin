
import styles from './Card.module.css'
import type { FC } from 'react'

type QuickstartCardsProps = {
  clickFunction: () => void,
  mainTag: {text: string, category: number },
  descriptionTags: {text: string, category: number}[],
  headerTitle: string,
  mainBody: string,
  imageSource: string| undefined,
  bgColor: string,
  headerColor: string,
}

export const QuickstartCards: FC<QuickstartCardsProps> = (props): JSX.Element => {
  const { clickFunction, bgColor, mainTag, descriptionTags, headerTitle, mainBody, imageSource, headerColor } = props
  const categoryValues = ['candy', 'bolt', 'aqua', 'grass', 'berry', 'orange', 'night', 'mud', 'dirt'] as const

  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: bgColor }} className={styles.cardContainer}>
        <div className={styles.cardImage}>
          <img className={styles.card} src={imageSource}/>
        </div>
        <sinch-tag style={{ marginLeft: '5%' }} text={mainTag.text} category={categoryValues[mainTag.category]}/>
        <p className={styles.cardTitle} style={{ color: headerColor }}>{headerTitle}</p>
        {/* <p className={styles.cardBody} style={{ color: headerColor }}>{headerBody}</p> */}
      </div>
      <div className={styles.cardMatter}>
        {mainBody}
      </div>
      <div>

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
      <div className={styles.cardButton}>
        <sinch-button style={{ marginTop: '20%' }} type="secondary" text="Try for free" onClick={clickFunction}/>
      </div>
    </div>
  )
}
