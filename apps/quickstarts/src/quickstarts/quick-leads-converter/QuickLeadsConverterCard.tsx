import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../components/Modal'
import { TagGroup } from '../../components/TagGroup'
import { TmpCardComponent } from '../../components/TmpCardComponent'
import imgSrc from './megaphone.png'
import type { QuickStartCard } from '../types'

const bgColor = 'var(--sinch-color-tropical-500)'
const textColor = 'white'

export const QuickLeadsConverterCard: QuickStartCard = ({ path }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const nav = useNavigate()

  const modal = showModal && (
    <Modal
      close={() => setShowModal(false)}
      bodyContent={[
        'Improve Leads Conversion through conversations.',
        'Forget forms. Quickly gather customer’s information through a personalized conversation.',
        'Two steps. Yup. That’s right. It only takes two steps to fully configure the Quick Leads Converter.',
        'Easy configuration. Get your solution running with no code.',
      ]}
      next={path == null ? () => {} : () => nav(path)}
      headerbgcolor={bgColor}
      headerTextColor={textColor}
      heading="Quick Leads Converter"
      headingContent="Automate Leads Qualification via WhatsApp, customers preferred channel"
      imagesource={imgSrc}
    />
  )

  return (
    <TmpCardComponent
      heading="Quick Leads Converter"
      headingTags={[{ category: 'grass', text: 'New' }]}
      headingImageUri={imgSrc}
      headingBgColor={bgColor}
      headingColor={textColor}
    >
      <p>Automate Leads Qualification by gathering users information through a personalized conversational experience.</p>
      <TagGroup>
        <sinch-tag category="grass" text="Easy"/>
        <sinch-tag text="2 minutes"/>
        <sinch-tag category="aqua" text="Marketing"/>
      </TagGroup>
      <sinch-button
        style={{ marginTop: 'auto', width: 'fit-content' }}
        onClick={() => setShowModal(true)}
        text="Try for free"
        aria-label="Try for free"
        type="secondary"
      />
      {modal}
    </TmpCardComponent>
  )
}
