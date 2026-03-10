import type { Meta, StoryObj } from '@storybook/react-vite'
import { HelpTooltip } from './HelpTooltip'

const meta = {
  title: 'Components/HelpTooltip',
  component: HelpTooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: 60, display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HelpTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is a helpful tooltip message.',
  },
}

export const LongContent: Story = {
  args: {
    children:
      'This tooltip contains a longer explanation to help the user understand a complex feature or setting in the interface.',
  },
}

export const WithInlineLabel: Story = {
  render: () => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      Password requirements
      <HelpTooltip>
        Must be at least 8 characters with one uppercase letter and one number.
      </HelpTooltip>
    </span>
  ),
}
