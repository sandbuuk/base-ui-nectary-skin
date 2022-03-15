import { NavLink } from 'react-router-dom'
import { TagGroup } from '../../components/TagGroup'
import { TmpCardComponent } from '../../components/TmpCardComponent'
import imgSrc from './robot.png'
import type { QuickStartCard } from '../types'

export const QuickFAQChatbotCard: QuickStartCard = ({ path }) => (
  <TmpCardComponent
    heading="Quick FAQ Chatbot"
    headingTags={[{ category: 'aqua', text: 'Coming Soon' }]}
    headingBgColor="var(--sinch-color-text-default)"
    headingColor="white"
    headingImageUri={imgSrc}
  >
    <p>Build a chatbot to answer frequently asked questions.</p>
    <TagGroup>
      <sinch-tag category="grass" text="Easy"/>
      <sinch-tag text="3 minutes"/>
      <sinch-tag category="aqua" text="Customer Support"/>
    </TagGroup>
    {path != null && <NavLink to={path}>Try for free</NavLink>}
  </TmpCardComponent>
)
