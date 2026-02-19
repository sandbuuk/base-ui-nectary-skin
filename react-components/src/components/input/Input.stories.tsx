import { fn } from '@storybook/test'
import { useState } from 'react'
import { Input } from './Input'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'number'],
      description: 'Input type',
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'Size of the input',
    },
    invalid: {
      control: 'boolean',
      description: 'Invalid/error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    readOnly: {
      control: 'boolean',
      description: 'Read-only state',
    },
    required: {
      control: 'boolean',
      description: 'Required field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Controlled value',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A text input component supporting controlled and uncontrolled patterns, multiple input types, error states, and icon/addon slots.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

// Simple search icon SVG for demos
const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 14L11 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Simple clear button for demos
const ClearButton = ({ onClick }: { onClick?: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center justify-center w-6 h-6 rounded hover:bg-surface-secondary-hover"
    aria-label="Clear"
  >
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
)

/**
 * Default input with placeholder.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

/**
 * Input with a value.
 */
export const WithValue: Story = {
  args: {
    value: 'Hello World',
  },
}

/**
 * Input with placeholder text.
 */
export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter your email address',
  },
}

/**
 * All size variants displayed together.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Small</span>
        <Input size="s" placeholder="Small input"/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Medium (default)</span>
        <Input size="m" placeholder="Medium input"/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Large</span>
        <Input size="l" placeholder="Large input"/>
      </div>
    </div>
  ),
}

/**
 * Small size input.
 */
export const Small: Story = {
  args: {
    size: 's',
    placeholder: 'Small input',
  },
}

/**
 * Medium size input (default).
 */
export const Medium: Story = {
  args: {
    size: 'm',
    placeholder: 'Medium input',
  },
}

/**
 * Large size input.
 */
export const Large: Story = {
  args: {
    size: 'l',
    placeholder: 'Large input',
  },
}

/**
 * Input in error/invalid state.
 */
export const Invalid: Story = {
  args: {
    invalid: true,
    placeholder: 'Invalid input',
    value: 'Invalid value',
  },
}

/**
 * Disabled input.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    value: 'Cannot edit this',
  },
}

/**
 * Read-only input.
 */
export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'Read-only value',
  },
}

/**
 * Password input type.
 */
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
}

/**
 * Number input type.
 */
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 100,
    step: 1,
  },
}

/**
 * Input with an icon on the left.
 */
export const WithIcon: Story = {
  args: {
    icon: <SearchIcon/>,
    placeholder: 'Search...',
  },
}

/**
 * Input with icon in all sizes.
 */
export const WithIconSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input size="s" icon={<SearchIcon/>} placeholder="Small with icon"/>
      <Input size="m" icon={<SearchIcon/>} placeholder="Medium with icon"/>
      <Input size="l" icon={<SearchIcon/>} placeholder="Large with icon"/>
    </div>
  ),
}

/**
 * Input with a right addon (clear button).
 */
export const WithRightAddon: Story = {
  render: () => {
    const [value, setValue] = useState('Some text')

    return (
      <Input
        value={value}
        onChange={setValue}
        rightAddon={<ClearButton onClick={() => setValue('')}/>}
        placeholder="Type something..."
      />
    )
  },
}

/**
 * Input with left addon.
 */
export const WithLeftAddon: Story = {
  args: {
    leftAddon: <span className="text-foreground-muted px-2">$</span>,
    placeholder: '0.00',
    type: 'number',
  },
}

/**
 * Input with both icon and right addon.
 */
export const WithIconAndAddon: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <Input
        value={value}
        onChange={setValue}
        icon={<SearchIcon/>}
        rightAddon={
          value !== '' ? <ClearButton onClick={() => setValue('')}/> : undefined
        }
        placeholder="Search..."
      />
    )
  },
}

/**
 * Controlled input example showing state management.
 */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <div className="flex flex-col gap-4">
        <Input
          value={value}
          onChange={setValue}
          placeholder="Type something..."
        />
        <p className="text-sm text-foreground-muted">
          Current value: {value || '(empty)'}
        </p>
      </div>
    )
  },
}

/**
 * Uncontrolled input with default value.
 */
export const Uncontrolled: Story = {
  args: {
    defaultValue: 'Default value',
    placeholder: 'Type something...',
  },
}

/**
 * Input with aria-label for accessibility.
 */
export const WithAriaLabel: Story = {
  args: {
    'aria-label': 'Email address',
    placeholder: 'email@example.com',
  },
}

/**
 * Input with max length validation.
 */
export const WithMaxLength: Story = {
  args: {
    maxLength: 10,
    placeholder: 'Max 10 characters',
  },
}

/**
 * Required input field.
 */
export const Required: Story = {
  args: {
    required: true,
    placeholder: 'Required field *',
  },
}

/**
 * Input with autocomplete attribute for forms.
 */
export const WithAutocomplete: Story = {
  args: {
    autoComplete: 'email',
    placeholder: 'Enter your email',
    type: 'text',
  },
}

/**
 * All states comparison.
 */
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Default</span>
        <Input placeholder="Default state"/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">With value</span>
        <Input value="Some value"/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Invalid</span>
        <Input invalid value="Invalid input"/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Disabled</span>
        <Input disabled value="Disabled input"/>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Read-only</span>
        <Input readOnly value="Read-only input"/>
      </div>
    </div>
  ),
}

/**
 * Form example showing multiple inputs.
 */
export const FormExample: Story = {
  render: () => (
    <form className="flex flex-col gap-4 max-w-sm" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Name</label>
        <Input placeholder="John Doe" required/>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Email</label>
        <Input type="text" placeholder="john@example.com" autoComplete="email" required/>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Password</label>
        <Input type="password" placeholder="Enter password" required/>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Age</label>
        <Input type="number" placeholder="25" min={0} max={150}/>
      </div>
    </form>
  ),
}
