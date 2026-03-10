import type { Meta, StoryObj } from '@storybook/react-vite'
import { Grid } from './Grid'

const meta = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

const boxStyle: React.CSSProperties = {
  background: '#e8e8e8',
  borderRadius: 4,
  padding: 16,
  textAlign: 'center',
  fontSize: 14,
}

export const Default: Story = {
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} style={boxStyle}>{i + 1}</div>
      ))}
    </Grid>
  ),
  args: {
    columns: 12,
    gap: 16,
  },
}

export const ThreeColumns: Story = {
  render: () => (
    <Grid columns={3} gap={16}>
      <div style={boxStyle}>Column 1</div>
      <div style={boxStyle}>Column 2</div>
      <div style={boxStyle}>Column 3</div>
      <div style={boxStyle}>Column 4</div>
      <div style={boxStyle}>Column 5</div>
      <div style={boxStyle}>Column 6</div>
    </Grid>
  ),
}

export const FourColumns: Story = {
  render: () => (
    <Grid columns={4} gap={24}>
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} style={boxStyle}>Item {i + 1}</div>
      ))}
    </Grid>
  ),
}

export const CustomGap: Story = {
  render: () => (
    <Grid columns={3} gap={32}>
      <div style={boxStyle}>A</div>
      <div style={boxStyle}>B</div>
      <div style={boxStyle}>C</div>
    </Grid>
  ),
}
