import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../components/Modal'
import { TagGroup } from '../../components/TagGroup'
import { TmpCardComponent } from '../../components/TmpCardComponent'
import imgSrc from './headset.png'
import type { QuickStartCard } from '../types'

const bgColor = 'var(--sinch-color-honey-400)'
const textColor = 'black'
const heading = 'Quick Customer Support'

export const QuickCustomerSupportCard: QuickStartCard = ({ path }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const nav = useNavigate()

  const modal = showModal && (
    <Modal
      isComingSoon={path == null}
      close={() => setShowModal(false)}
      bodyContent={[
        'Give customers quick answers to their questions.',
        'Automate customer support through various channels.',
        'Speed up customer resolutions.',
        'Customize your bot based on a specific audience.',
        'Increase customer satisfaction by offering a personalized support.',
      ]}
      next={path == null ? () => {} : () => nav(path)}
      headerbgcolor={'#F1F3F4'}
      headerTextColor={textColor}
      heading={heading}
      headingContent="Save customers valuable time and effort by offering support across various channels"
      // TODO: This image needs to have transparent background.. ;)
      imagesource={imgSrc}
    />
  )

  return (
    <TmpCardComponent
      heading={heading}
      headingTags={[{ category: 'aqua', text: 'Coming Soon' }]}
      headingImageUri={imgSrc}
      headingBgColor={bgColor}
      headingColor={textColor}
    >
      <p>Deliver a consistent Customer Support and solve issues at hand by making support interactive.</p>
      <TagGroup>
        <sinch-tag category="grass" text="Easy"/>
        <sinch-tag text="2 minutes"/>
        <sinch-tag category="aqua" text="Customer Support"/>
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
