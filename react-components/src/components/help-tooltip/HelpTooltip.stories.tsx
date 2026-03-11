import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { fn } from '@storybook/test'
import { HelpTooltip } from './HelpTooltip'

const meta: Meta<typeof HelpTooltip> = {
  title: 'Components/HelpTooltip',
  component: HelpTooltip,
  tags: ['autodocs'],
  args: {
    onShow: fn(),
    onHide: fn(),
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ],
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    width: {
      control: { type: 'number', min: 12, max: 48 },
    },
    isOpen: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A convenience wrapper combining a help icon with tooltip functionality for displaying contextual help text on hover.\n\nKeyboard: Tab to focus the help icon. Tooltip appears on focus.',
      },
    },
  },
  // Add padding to ensure tooltips have room to display
  decorators: [
    (Story) => (
      <div className="p-16 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof HelpTooltip>

export const Default: Story = {
  args: {
    text: 'This is helpful information about the feature.',
  },
}

export const WithLongText: Story = {
  args: {
    text: 'This is a longer explanation that provides detailed information about how this feature works and what you can expect when using it.',
  },
}

export const AllOrientations: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-16 items-center justify-items-center">
      <div />
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">top</span>
        <HelpTooltip text="Tooltip on top" orientation="top" />
      </div>
      <div />

      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">left</span>
        <HelpTooltip text="Tooltip on left" orientation="left" />
      </div>
      <div />
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">right</span>
        <HelpTooltip text="Tooltip on right" orientation="right" />
      </div>

      <div />
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">bottom</span>
        <HelpTooltip text="Tooltip on bottom" orientation="bottom" />
      </div>
      <div />

      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">top-left</span>
        <HelpTooltip text="Tooltip on top-left" orientation="top-left" />
      </div>
      <div />
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">top-right</span>
        <HelpTooltip text="Tooltip on top-right" orientation="top-right" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">bottom-left</span>
        <HelpTooltip text="Tooltip on bottom-left" orientation="bottom-left" />
      </div>
      <div />
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">bottom-right</span>
        <HelpTooltip text="Tooltip on bottom-right" orientation="bottom-right" />
      </div>
    </div>
  ),
}

export const TextAlignment: Story = {
  render: () => (
    <div className="flex gap-16 items-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">left</span>
        <HelpTooltip
          text="This text is aligned to the left side of the tooltip."
          textAlign="left"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">center</span>
        <HelpTooltip
          text="This text is centered in the tooltip."
          textAlign="center"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">right</span>
        <HelpTooltip
          text="This text is aligned to the right side of the tooltip."
          textAlign="right"
        />
      </div>
    </div>
  ),
}

export const CustomSizes: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">12px</span>
        <HelpTooltip text="Small icon" width={12} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">18px (default)</span>
        <HelpTooltip text="Default size icon" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">24px</span>
        <HelpTooltip text="Medium icon" width={24} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">32px</span>
        <HelpTooltip text="Large icon" width={32} />
      </div>
    </div>
  ),
}

export const Controlled: Story = {
  render: function ControlledStory() {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="flex flex-col items-center gap-4">
        <button
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Hide' : 'Show'} Tooltip
        </button>
        <HelpTooltip
          text="This tooltip is controlled programmatically."
          isOpen={isOpen}
          onShow={() => console.log('Tooltip shown')}
          onHide={() => console.log('Tooltip hidden')}
        />
      </div>
    )
  },
}

export const InlineWithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span>What is this feature?</span>
      <HelpTooltip text="This feature allows you to do amazing things!" />
    </div>
  ),
}

export const InFormLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 text-sm font-medium">
          Email Address
          <HelpTooltip text="We'll use this email to send you important updates about your account." />
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="px-3 py-2 border border-border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 text-sm font-medium">
          API Key
          <HelpTooltip text="Your API key is required for authentication. Keep it secret!" />
        </label>
        <input
          type="password"
          placeholder="sk-xxxxxxxx"
          className="px-3 py-2 border border-border rounded-md"
        />
      </div>
    </div>
  ),
}
