import { NavLink } from 'react-router-dom'
import { TagGroup } from '../../components/TagGroup'
import { TmpCardComponent } from '../../components/TmpCardComponent'
import imgSrc from './package-and-marker.png'
import type { QuickStartCard } from '../types'

export const QuickOrderStatusCard: QuickStartCard = ({ path }) => (
  <TmpCardComponent
    heading="Quick Order Status & Package Tracking Update"
    headingTags={[{ category: 'aqua', text: 'Coming Soon' }]}
    headingBgColor="var(--sinch-color-tropical-500)"
    headingColor="white"
    headingImageUri={imgSrc}
  >
    <p>Build a Chatbot that allows users to check the status of their purchases and track their deliveries at any time.</p>
    <TagGroup>
      <sinch-tag category="grass" text="Easy"/>
      <sinch-tag text="3 minutes"/>
      <sinch-tag category="aqua" text="Marketing"/>
    </TagGroup>
    {path != null && <NavLink to={path}>Try for free</NavLink>}
  </TmpCardComponent>
)
