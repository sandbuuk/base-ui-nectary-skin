import type { Meta, StoryObj } from '@storybook/react-vite'
import { ColorSwatch } from './ColorSwatch'

const meta = {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  tags: ['autodocs'],
} satisfies Meta<typeof ColorSwatch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: '#3089F0',
  },
}

export const Selected: Story = {
  args: {
    color: '#53BD69',
    selected: true,
  },
}

export const Small: Story = {
  args: {
    color: '#D63F3F',
    size: 's',
  },
}

export const Medium: Story = {
  args: {
    color: '#7B61FF',
    size: 'm',
  },
}

export const Large: Story = {
  args: {
    color: '#FFBE3C',
    size: 'l',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <ColorSwatch color="#D63F3F" size="s" />
      <ColorSwatch color="#3089F0" size="m" />
      <ColorSwatch color="#53BD69" size="l" />
    </div>
  ),
}

export const ColorPalette: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {['#D63F3F', '#F58B4E', '#FFBE3C', '#53BD69', '#006063', '#3089F0', '#7B61FF', '#E056A0'].map(
        (color) => (
          <ColorSwatch key={color} color={color} onClick={(c) => console.log('Selected:', c)} />
        ),
      )}
    </div>
  ),
}
