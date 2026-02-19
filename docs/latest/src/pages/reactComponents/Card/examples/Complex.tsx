import { Button, Card, CardTitle, Icon, Text } from '@nectary/react'
import type { FC } from 'react'
import '@nectary/assets/illustrations/cat-texting'

export const ComplexExample: FC = () => (
  <Card
    media={
      <sinch-illustration-cat-texting background="blue"/>
    }
    title={(
      <CardTitle
        text="Card Title"
        icon={<Icon name="fa-square-dashed-circle-plus" iconsVersion="2"/>}
      />
    )}
    content={(
      <Text type="m">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </Text>
    )}
    footer={(
      <Button
        variant="primary"
        onClick={() => console.log('click')}
        aria-label="Button label"
      >
        Button label
      </Button>
    )}
  />
)
