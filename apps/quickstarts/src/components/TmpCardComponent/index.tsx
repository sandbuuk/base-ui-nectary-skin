import '@sinch-engage/nectary/tag'
import { TagGroup } from '../TagGroup'
import style from './TmpCardComponent.module.css'
import type { FC } from 'react'

type Tag = {
  category: JSX.IntrinsicElements['sinch-tag']['category'],
  text: string,
}
type TmpCardComponentProps = {
  heading: string,
  headingBgColor: string,
  headingColor: string,
  headingImageUri: string,
  headingTags: Tag[],
}

export const TmpCardComponent: FC<TmpCardComponentProps> = ({ headingTags, heading, headingColor, headingBgColor, headingImageUri, children }) => (
  <section className={style.root}>
    <header style={{ backgroundColor: headingBgColor, color: headingColor }}>
      <img src={headingImageUri}/>
      <TagGroup>
        {headingTags.map((tag, i) => <sinch-tag key={i} {...tag}/>)}
      </TagGroup>
      <h3>{heading}</h3>
    </header>
    <main>
      {children}
    </main>
  </section>
)
