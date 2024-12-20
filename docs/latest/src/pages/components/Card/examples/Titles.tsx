import type { FC } from 'react'
import '@nectary/components/card-v2'
import '@nectary/components/card-v2-title'
import '@nectary/components/icon'

const VerticalIcon = () => (
  <sinch-card-v2>
    <sinch-card-v2-title slot="title" text="Vertical" orientation="vertical">
      <sinch-icon slot="icon" icons-version="2" name="fa-square-dashed-circle-plus"/>
    </sinch-card-v2-title>
  </sinch-card-v2>
)

const HorizontalIcon = () => (
  <sinch-card-v2>
    <sinch-card-v2-title slot="title" text="Horizontal" orientation="horizontal">
      <sinch-icon slot="icon" icons-version="2" name="fa-square-dashed-circle-plus"/>
    </sinch-card-v2-title>
  </sinch-card-v2>
)

const NoIcon = () => (
  <sinch-card-v2>
    <sinch-card-v2-title slot="title" text="No Icon"/>
  </sinch-card-v2>
)

export const TitlesExample: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <VerticalIcon/>
    <HorizontalIcon/>
    <NoIcon/>
  </div>
)
