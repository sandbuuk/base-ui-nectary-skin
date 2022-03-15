import { NavLink } from 'react-router-dom'
import { TagGroup } from '../../components/TagGroup'
import { TmpCardComponent } from '../../components/TmpCardComponent'
import imgSrc from './thumbs-up.png'
import type { QuickStartCard } from '../types'

export const QuickProductFeedbackCard: QuickStartCard = ({ path }) => (
  <TmpCardComponent
    heading="Quick Product Feedback"
    headingTags={[{ category: 'aqua', text: 'Coming Soon' }]}
    headingBgColor="var(--sinch-color-text-default)"
    headingColor="white"
    headingImageUri={imgSrc}
  >
    <p>Create a Chatbot that compiles product feedback through personalized user conversations.</p>
    <TagGroup>
      <sinch-tag category="grass" text="Easy"/>
      <sinch-tag text="3 minutes"/>
      <sinch-tag category="aqua" text="Surveys"/>
    </TagGroup>
    {path != null && <NavLink to={path}>Try for free</NavLink>}
  </TmpCardComponent>
)
