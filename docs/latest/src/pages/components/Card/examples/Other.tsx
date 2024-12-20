import React from 'react'
import type { FC } from 'react'
import '@nectary/components/card-v2'
import '@nectary/components/card-v2-title'
import '@nectary/components/link'
import '@nectary/components/text'
import '@nectary/components/icon'
import '@nectary/components/button'
import '@nectary/assets/illustrations/cat-texting'

const MediaTitle = () => (
  <sinch-card-v2>
    <sinch-illustration-cat-texting
      slot="media"
      background="blue"
    />
    <sinch-card-v2-title slot="title" text="Card Title"/>
  </sinch-card-v2>
)

const MediaFooter = () => (
  <sinch-card-v2>
    <sinch-illustration-cat-texting
      slot="media"
      background="blue"
    />
    <sinch-link
      style={{ marginLeft: 'auto' }}
      slot="footer"
      href="#"
      text="Link"
      aria-label="Link"
      standalone
    />
  </sinch-card-v2>
)

const TitleContentFooter = () => (
  <sinch-card-v2>
    <sinch-icon slot="title" icons-version="2" name="fa-square-dashed-circle-plus" style={{ '--sinch-global-size-icon': '48px' }}/>
    <sinch-text slot="content" type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</sinch-text>

    <sinch-button
      style={{ marginLeft: 'auto' }}
      slot="footer"
      type="primary"
      text="Button label"
      aria-label="Button label"
      on-click={() => console.log('click')}
    />
  </sinch-card-v2>
)

const CustomInteractive = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <sinch-card-v2 on-click={() => setIsOpen((bool) => !bool)} aria-label="Click me">
      <div slot="title" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <sinch-card-v2-title text="Click me"/>
        <sinch-icon icons-version="2" name={isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}/>
      </div>
      {isOpen && <sinch-text slot="content" type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</sinch-text>}
    </sinch-card-v2>
  )
}

export const OtherExample: FC = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', alignItems: 'start' }}>
    <MediaTitle/>
    <MediaFooter/>
    <TitleContentFooter/>
    <CustomInteractive/>
  </div>
)
