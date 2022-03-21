import '@sinch-engage/nectary/tag'
import styled from 'styled-components'
import { TagGroup } from './TagGroup'
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

// Not spending too much time on the styling here since we
// will soon get a new design for these cards.

const TmpCardSection = styled.section`
  background-color: white;
  margin: 0;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  & > main {
    background-color: white;
    min-height: 268px;
    height: fit-content;
    padding: 25px 20px;
  }
`

const Header = styled.header`
  height: 309px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;

  & > img {
    align-self: center;
    justify-self: start;
    height: 85px;
  }

  & > h3 {
    font-size: 23px;
  }

  & > * {
    flex: 0;
    align-self: start;
    justify-self: end;
  }
`

export const TmpCardComponent: FC<TmpCardComponentProps> = ({ headingTags, heading, headingColor, headingBgColor, headingImageUri, children }) => (
  <TmpCardSection>
    <Header style={{ backgroundColor: headingBgColor, color: headingColor }}>
      <img src={headingImageUri}/>
      <TagGroup>
        {headingTags.map((tag, i) => <sinch-tag key={i} {...tag}/>)}
      </TagGroup>
      <h3>{heading}</h3>
    </Header>
    <main>
      {children}
    </main>
  </TmpCardSection>
)
