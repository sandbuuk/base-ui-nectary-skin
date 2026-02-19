import { Grid, GridItem } from '@nectary/react'
import type { CSSProperties, FC } from 'react'

const itemStyles: CSSProperties = {
  backgroundColor: 'var(--sinch-color-purple-200)',
  padding: '16px',
  borderRadius: '8px',
  textAlign: 'center',
}

export const SimpleExample: FC = () => (
  <Grid>
    <GridItem xl={3} l={4} m={4} s={4}>
      <div style={itemStyles}>Item 1 (xl:3, l:4, m:4, s:4)</div>
    </GridItem>
    <GridItem xl={3} l={4} m={4} s={4}>
      <div style={itemStyles}>Item 2 (xl:3, l:4, m:4, s:4)</div>
    </GridItem>
    <GridItem xl={3} l={4} m={4} s={2}>
      <div style={itemStyles}>Item 3 (xl:3, l:4, m:4, s:2)</div>
    </GridItem>
    <GridItem xl={3} l={4} m={4} s={2}>
      <div style={itemStyles}>Item 4 (xl:3, l:4, m:4, s:2)</div>
    </GridItem>
  </Grid>
)
