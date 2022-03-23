import { NavLink } from 'react-router-dom'
import { TagGroup } from '../../components/TagGroup'
import { TmpCardComponent } from '../../components/TmpCardComponent'
import imageSrc from './cart.png'
import type { QuickStartCard } from '../types'

export const QuickAbandonedCartRecoveryCard: QuickStartCard = ({ path }) => (
  <TmpCardComponent
    heading="Quick Abandoned Cart Recovery"
    headingTags={[{ category: 'aqua', text: 'Coming Soon' }]}
    headingBgColor="var(--sinch-color-honey-400)"
    headingColor="black"
    headingImageUri={imageSrc}
  >
    <p>Create a Chatbot that sends personalized reminders to users.</p>
    <TagGroup>
      <sinch-tag category="grass" text="Easy"/>
      <sinch-tag text="2 minutes"/>
      <sinch-tag category="aqua" text="E-commerce"/>
    </TagGroup>
    {path != null && <NavLink to={path}>Try for free</NavLink>}
  </TmpCardComponent>
)

