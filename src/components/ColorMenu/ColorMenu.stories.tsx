import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ColorMenu } from './ColorMenu'

const meta = {
  title: 'Components/ColorMenu',
  component: ColorMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof ColorMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithSelectedColor: Story = {
  args: {
    value: '#3089F0',
  },
}

export const Controlled: Story = {
  render: () => {
    const [color, setColor] = useState('#53BD69')
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <ColorMenu value={color} onValueChange={setColor} />
        <span>Selected: {color}</span>
      </div>
    )
  },
}

export const CustomColors: Story = {
  args: {
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'],
    columns: 4,
  },
}

export const FewColors: Story = {
  args: {
    colors: ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFFFF'],
    columns: 5,
  },
}
