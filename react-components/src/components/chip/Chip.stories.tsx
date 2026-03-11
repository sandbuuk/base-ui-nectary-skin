import { fn } from '@storybook/test'
import { Chip, type ChipColor } from './Chip'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  argTypes: {
    color: {
      control: 'select',
      options: [
        'neutral',
        'gray',
        'light-gray',
        'dark-gray',
        'blue',
        'light-blue',
        'dark-blue',
        'green',
        'light-green',
        'dark-green',
        'yellow',
        'light-yellow',
        'dark-yellow',
        'orange',
        'light-orange',
        'dark-orange',
        'red',
        'light-red',
        'dark-red',
        'pink',
        'light-pink',
        'dark-pink',
        'violet',
        'light-violet',
        'dark-violet',
        'danger',
        'warning',
        'success',
        'info',
      ],
    },
    size: {
      control: 'select',
      options: ['s', 'm'],
    },
    small: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A removable tag or label component with multiple color variants, two sizes, optional icons, and click handlers for dismissal.\n\nKeyboard: Tab to focus. Enter or Space to activate. Delete or Backspace to remove.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

// Default chip
export const Default: Story = {
  args: {
    text: 'Label',
  },
}

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Chip size="m" text="Medium (default)"/>
      <Chip size="s" text="Small"/>
      <Chip small text="Small (via prop)"/>
    </div>
  ),
}

// Semantic colors
export const SemanticColors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Chip color="neutral" text="Neutral"/>
      <Chip color="success" text="Success"/>
      <Chip color="warning" text="Warning"/>
      <Chip color="danger" text="Danger"/>
      <Chip color="info" text="Info"/>
    </div>
  ),
}

// Base colors
export const BaseColors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Chip color="gray" text="Gray"/>
      <Chip color="blue" text="Blue"/>
      <Chip color="green" text="Green"/>
      <Chip color="yellow" text="Yellow"/>
      <Chip color="orange" text="Orange"/>
      <Chip color="red" text="Red"/>
      <Chip color="pink" text="Pink"/>
      <Chip color="violet" text="Violet"/>
    </div>
  ),
}

// Light color variants
export const LightColors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Chip color="light-gray" text="Light Gray"/>
      <Chip color="light-blue" text="Light Blue"/>
      <Chip color="light-green" text="Light Green"/>
      <Chip color="light-yellow" text="Light Yellow"/>
      <Chip color="light-orange" text="Light Orange"/>
      <Chip color="light-red" text="Light Red"/>
      <Chip color="light-pink" text="Light Pink"/>
      <Chip color="light-violet" text="Light Violet"/>
    </div>
  ),
}

// Dark color variants
export const DarkColors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Chip color="dark-gray" text="Dark Gray"/>
      <Chip color="dark-blue" text="Dark Blue"/>
      <Chip color="dark-green" text="Dark Green"/>
      <Chip color="dark-yellow" text="Dark Yellow"/>
      <Chip color="dark-orange" text="Dark Orange"/>
      <Chip color="dark-red" text="Dark Red"/>
      <Chip color="dark-pink" text="Dark Pink"/>
      <Chip color="dark-violet" text="Dark Violet"/>
    </div>
  ),
}

// All colors grid
export const AllColors: Story = {
  render: () => {
    const colors: ChipColor[] = [
      'neutral',
      'gray',
      'light-gray',
      'dark-gray',
      'blue',
      'light-blue',
      'dark-blue',
      'green',
      'light-green',
      'dark-green',
      'yellow',
      'light-yellow',
      'dark-yellow',
      'orange',
      'light-orange',
      'dark-orange',
      'red',
      'light-red',
      'dark-red',
      'pink',
      'light-pink',
      'dark-pink',
      'violet',
      'light-violet',
      'dark-violet',
      'danger',
      'warning',
      'success',
      'info',
    ]

    return (
      <div className="flex flex-wrap items-center gap-2">
        {colors.map((color) => (
          <Chip key={color} color={color} text={color}/>
        ))}
      </div>
    )
  },
}

// With icon
export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Chip
        text="With Icon"
        icon={(
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="4"/>
          </svg>
        )}
      />
      <Chip
        text="Success"
        color="success"
        icon={(
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6.5 11L3 7.5l1-1 2.5 2.5 5-5 1 1z"/>
          </svg>
        )}
      />
      <Chip
        text="Small"
        small
        icon={(
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="4"/>
          </svg>
        )}
      />
    </div>
  ),
}

// With custom right icon
export const CustomRightIcon: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Chip
        text="Custom Close"
        rightIcon={(
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 4L12 12M4 12L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      />
      <Chip
        text="Edit"
        rightIcon={(
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M12 4l-1-1-7 7-1 3 3-1 7-7-1-1z"/>
          </svg>
        )}
      />
    </div>
  ),
}

// Small size with various colors
export const SmallVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Chip small color="neutral" text="Neutral"/>
      <Chip small color="success" text="Success"/>
      <Chip small color="warning" text="Warning"/>
      <Chip small color="danger" text="Danger"/>
      <Chip small color="info" text="Info"/>
      <Chip small color="blue" text="Blue"/>
      <Chip small color="violet" text="Violet"/>
    </div>
  ),
}

// Interactive example showing click handling
export const Interactive: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <Chip
          text="Click me"
          onClick={() => alert('Chip clicked!')}
        />
        <Chip
          text="Focusable"
          color="blue"
          onFocus={() => console.log('Chip focused')}
          onBlur={() => console.log('Chip blurred')}
        />
      </div>
    )
  },
}

// Interactive playground
export const Playground: Story = {
  args: {
    text: 'Customizable Chip',
    color: 'neutral',
    size: 'm',
    small: false,
  },
}
