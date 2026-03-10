import type { Meta, StoryObj } from '@storybook/react-vite'
import { Flag } from './Flag'

const meta = {
  title: 'Components/Flag',
  component: Flag,
  tags: ['autodocs'],
} satisfies Meta<typeof Flag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    code: 'US',
  },
}

export const Small: Story = {
  args: {
    code: 'GB',
    size: 's',
  },
}

export const Medium: Story = {
  args: {
    code: 'FR',
    size: 'm',
  },
}

export const Large: Story = {
  args: {
    code: 'DE',
    size: 'l',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Flag code="AU" size="s" />
      <Flag code="AU" size="m" />
      <Flag code="AU" size="l" />
    </div>
  ),
}

export const MultipleCountries: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Flag code="US" />
      <Flag code="GB" />
      <Flag code="FR" />
      <Flag code="DE" />
      <Flag code="JP" />
      <Flag code="AU" />
      <Flag code="CA" />
      <Flag code="BR" />
      <Flag code="IN" />
      <Flag code="KR" />
    </div>
  ),
}
