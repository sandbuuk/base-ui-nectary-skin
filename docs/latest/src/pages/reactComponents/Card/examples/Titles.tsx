import { Card, CardTitle, Icon } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}

const VerticalIcon = () => (
  <Card
    title={(
      <CardTitle
        text="Vertical"
        orientation="vertical"
        icon={<Icon name="fa-square-dashed-circle-plus" iconsVersion="2"/>}
      />
    )}
  />
)

const HorizontalIcon = () => (
  <Card
    title={(
      <CardTitle
        text="Horizontal"
        orientation="horizontal"
        icon={<Icon name="fa-square-dashed-circle-plus" iconsVersion="2"/>}
      />
    )}
  />
)

const NoIcon = () => (
  <Card
    title={<CardTitle text="No Icon"/>}
  />
)

export const TitlesExample: FC = () => (
  <div style={wrapperStyles}>
    <VerticalIcon/>
    <HorizontalIcon/>
    <NoIcon/>
  </div>
)
