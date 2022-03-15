import { NavLink } from 'react-router-dom'
import { TagGroup } from '../../components/TagGroup'
import { TmpCardComponent } from '../../components/TmpCardComponent'
import imgSrc from './megaphone.png'
import type { QuickStartCard } from '../types'

export const QuickLeadsConverterCard: QuickStartCard = ({ path }) => (
  <TmpCardComponent
    heading="Quick Leads Converter"
    headingTags={[{ category: 'grass', text: 'New' }]}
    headingImageUri={imgSrc}
    headingBgColor="var(--sinch-color-tropical-500)"
    headingColor="white"
  >
    <p>Automate Leads Qualification by gathering users information through a personalized conversational experience.</p>
    <TagGroup>
      <sinch-tag category="grass" text="Easy"/>
      <sinch-tag text="2 minutes"/>
      <sinch-tag category="aqua" text="Marketing"/>
    </TagGroup>
    {path != null && <NavLink to={path}>Try for free</NavLink>}
  </TmpCardComponent>
)
