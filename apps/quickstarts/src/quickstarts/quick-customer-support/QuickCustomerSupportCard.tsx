import { NavLink } from 'react-router-dom'
import { TagGroup } from '../../components/TagGroup'
import { TmpCardComponent } from '../../components/TmpCardComponent'
import imgSrc from './headset.png'
import type { QuickStartCard } from '../types'

export const QuickCustomerSupportCard: QuickStartCard = ({ path }) => (
  <TmpCardComponent
    heading="Quick Customer Support"
    headingTags={[{ category: 'aqua', text: 'Coming Soon' }]}
    headingImageUri={imgSrc}
    headingBgColor="var(--sinch-color-honey-400)"
    headingColor="black"
  >
    <p>Deliver a consistent Customer Support and solve issues at hand by making support interactive.</p>
    <TagGroup>
      <sinch-tag category="grass" text="Easy"/>
      <sinch-tag text="2 minutes"/>
      <sinch-tag category="aqua" text="Customer Support"/>
    </TagGroup>
    {path != null && <NavLink to={path}>Try for free</NavLink>}
  </TmpCardComponent>
)
