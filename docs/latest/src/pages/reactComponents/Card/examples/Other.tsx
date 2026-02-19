import { Button, Card, CardTitle, Icon, Link, Text } from '@nectary/react'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/assets/illustrations/cat-texting'

const wrapperStyles: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 10,
  alignItems: 'start',
}

const footerStyles: CSSProperties = {
  marginLeft: 'auto',
}

const titleRowStyles: CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const MediaTitle = () => (
  <Card
    media={<sinch-illustration-cat-texting background="blue"/>}
    title={<CardTitle text="Card Title"/>}
  />
)

const MediaFooter = () => (
  <Card
    media={<sinch-illustration-cat-texting background="blue"/>}
    footer={(
      <Link
        style={footerStyles}
        href="#"
        text="Link"
        aria-label="Link"
        standalone
      />
    )}
  />
)

const TitleContentFooter = () => (
  <Card
    title={(
      <Icon
        name="fa-square-dashed-circle-plus"
        iconsVersion="2"
        style={{ '--sinch-global-size-icon': '48px' } as CSSProperties}
      />
    )}
    content={(
      <Text type="m">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </Text>
    )}
    footer={(
      <Button
        style={footerStyles}
        variant="primary"
        onClick={() => console.log('click')}
        aria-label="Button label"
      >
        Button label
      </Button>
    )}
  />
)

const CustomInteractive = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card
      onClick={() => setIsOpen((prev) => !prev)}
      aria-label="Click me"
      title={(
        <div style={titleRowStyles}>
          <CardTitle text="Click me"/>
          <Icon name={isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} iconsVersion="2"/>
        </div>
      )}
      content={
        isOpen
          ? <Text type="m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
          : undefined
      }
    />
  )
}

export const OtherExample: FC = () => (
  <div style={wrapperStyles}>
    <MediaTitle/>
    <MediaFooter/>
    <TitleContentFooter/>
    <CustomInteractive/>
  </div>
)
