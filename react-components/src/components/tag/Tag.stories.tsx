import { Tag, type TagColor } from './Tag'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A compact colored label with multiple color variants, optional icon support, and removable option for categorizing or filtering content.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default',
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
    ellipsis: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

// Default tag
export const Default: Story = {
  args: {
    text: 'Label',
  },
}

// With text prop
export const WithTextProp: Story = {
  args: {
    text: 'Tag Text',
  },
}

// With children
export const WithChildren: Story = {
  args: {
    children: 'Tag Content',
  },
}

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tag size="m" text="Medium (default)"/>
      <Tag size="s" text="Small"/>
      <Tag small text="Small (via prop)"/>
    </div>
  ),
}

// Semantic colors
export const SemanticColors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag color="default" text="Default"/>
      <Tag color="success" text="Success"/>
      <Tag color="warning" text="Warning"/>
      <Tag color="danger" text="Danger"/>
      <Tag color="info" text="Info"/>
    </div>
  ),
}

// Base colors
export const BaseColors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag color="gray" text="Gray"/>
      <Tag color="blue" text="Blue"/>
      <Tag color="green" text="Green"/>
      <Tag color="yellow" text="Yellow"/>
      <Tag color="orange" text="Orange"/>
      <Tag color="red" text="Red"/>
      <Tag color="pink" text="Pink"/>
      <Tag color="violet" text="Violet"/>
    </div>
  ),
}

// Light color variants
export const LightColors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag color="light-gray" text="Light Gray"/>
      <Tag color="light-blue" text="Light Blue"/>
      <Tag color="light-green" text="Light Green"/>
      <Tag color="light-yellow" text="Light Yellow"/>
      <Tag color="light-orange" text="Light Orange"/>
      <Tag color="light-red" text="Light Red"/>
      <Tag color="light-pink" text="Light Pink"/>
      <Tag color="light-violet" text="Light Violet"/>
    </div>
  ),
}

// Dark color variants
export const DarkColors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag color="dark-gray" text="Dark Gray"/>
      <Tag color="dark-blue" text="Dark Blue"/>
      <Tag color="dark-green" text="Dark Green"/>
      <Tag color="dark-yellow" text="Dark Yellow"/>
      <Tag color="dark-orange" text="Dark Orange"/>
      <Tag color="dark-red" text="Dark Red"/>
      <Tag color="dark-pink" text="Dark Pink"/>
      <Tag color="dark-violet" text="Dark Violet"/>
    </div>
  ),
}

// All colors grid
export const AllColors: Story = {
  render: () => {
    const colors: TagColor[] = [
      'default',
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
          <Tag key={color} color={color} text={color}/>
        ))}
      </div>
    )
  },
}

// With icon (placeholder)
export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tag
        text="With Icon"
        icon={(
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="4"/>
          </svg>
        )}
      />
      <Tag
        text="Success"
        color="success"
        icon={(
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6.5 11L3 7.5l1-1 2.5 2.5 5-5 1 1z"/>
          </svg>
        )}
      />
      <Tag
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

// With ellipsis
export const WithEllipsis: Story = {
  render: () => (
    <div className="max-w-[150px]">
      <Tag
        text="This is a very long tag text that should be truncated"
        ellipsis
      />
    </div>
  ),
}

// Small size with various colors
export const SmallVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag small color="default" text="Default"/>
      <Tag small color="success" text="Success"/>
      <Tag small color="warning" text="Warning"/>
      <Tag small color="danger" text="Danger"/>
      <Tag small color="info" text="Info"/>
      <Tag small color="blue" text="Blue"/>
      <Tag small color="violet" text="Violet"/>
    </div>
  ),
}

// Interactive playground
export const Playground: Story = {
  args: {
    text: 'Customizable Tag',
    color: 'default',
    size: 'm',
    small: false,
    ellipsis: false,
  },
}
