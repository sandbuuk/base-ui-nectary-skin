import { fn } from '@storybook/test'
import { Button } from './Button'
import type { Meta, StoryObj } from '@storybook/react'

// Simple placeholder icons for stories
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1l2.2 4.5 5 .7-3.6 3.5.9 5L8 12.6 3.5 14.7l.9-5-3.6-3.5 5-.7L8 1z"/>
  </svg>
)

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'subtle-primary', 'subtle-secondary', 'cta-primary', 'cta-secondary', 'destructive'],
      description: 'Visual variant of the button',
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
    toggled: {
      control: 'boolean',
      description: 'Whether the button is toggled (for subtle variants)',
    },
    text: {
      control: 'text',
      description: 'Text content of the button',
    },
    formType: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Form behavior type',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// Default button
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

// All variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="subtle-primary">Subtle Primary</Button>
      <Button variant="subtle-secondary">Subtle Secondary</Button>
      <Button variant="cta-primary">CTA Primary</Button>
      <Button variant="cta-secondary">CTA Secondary</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
}

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="s">Small</Button>
      <Button size="m">Medium</Button>
      <Button size="l">Large</Button>
    </div>
  ),
}

// All sizes with primary variant
export const SizesPrimary: Story = {
  name: 'Sizes (Primary)',
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" size="xs">Extra Small</Button>
      <Button variant="primary" size="s">Small</Button>
      <Button variant="primary" size="m">Medium</Button>
      <Button variant="primary" size="l">Large</Button>
    </div>
  ),
}

// Disabled states
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="subtle-primary" disabled>Subtle Primary</Button>
      <Button variant="subtle-secondary" disabled>Subtle Secondary</Button>
      <Button variant="cta-primary" disabled>CTA Primary</Button>
      <Button variant="cta-secondary" disabled>CTA Secondary</Button>
      <Button variant="destructive" disabled>Destructive</Button>
    </div>
  ),
}

// Loading states
export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" loading>Primary</Button>
      <Button variant="secondary" loading>Secondary</Button>
      <Button variant="subtle-primary" loading>Subtle Primary</Button>
      <Button variant="destructive" loading>Destructive</Button>
    </div>
  ),
}

// Loading with different sizes
export const LoadingSizes: Story = {
  name: 'Loading (Sizes)',
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" size="xs" loading>Extra Small</Button>
      <Button variant="primary" size="s" loading>Small</Button>
      <Button variant="primary" size="m" loading>Medium</Button>
      <Button variant="primary" size="l" loading>Large</Button>
    </div>
  ),
}

// With left icon
export const WithLeftIcon: Story = {
  args: {
    children: 'Add Item',
    leftIcon: <PlusIcon/>,
  },
}

// With right icon
export const WithRightIcon: Story = {
  args: {
    children: 'Continue',
    rightIcon: <ArrowRightIcon/>,
  },
}

// With both icons
export const WithBothIcons: Story = {
  args: {
    children: 'Favorite',
    leftIcon: <StarIcon/>,
    rightIcon: <ArrowRightIcon/>,
  },
}

// Icon-only button
export const IconOnly: Story = {
  args: {
    icon: <PlusIcon/>,
    'aria-label': 'Add item',
  },
}

// Icon-only buttons with different sizes
export const IconOnlySizes: Story = {
  name: 'Icon Only (Sizes)',
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs" icon={<PlusIcon/>} aria-label="Add item"/>
      <Button size="s" icon={<PlusIcon/>} aria-label="Add item"/>
      <Button size="m" icon={<PlusIcon/>} aria-label="Add item"/>
      <Button size="l" icon={<PlusIcon/>} aria-label="Add item"/>
    </div>
  ),
}

// Icon-only buttons with different variants
export const IconOnlyVariants: Story = {
  name: 'Icon Only (Variants)',
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" icon={<PlusIcon/>} aria-label="Add item"/>
      <Button variant="secondary" icon={<PlusIcon/>} aria-label="Add item"/>
      <Button variant="subtle-primary" icon={<StarIcon/>} aria-label="Favorite"/>
      <Button variant="subtle-secondary" icon={<StarIcon/>} aria-label="Favorite"/>
      <Button variant="destructive" icon={<PlusIcon/>} aria-label="Delete"/>
    </div>
  ),
}

// Toggled states (for subtle variants)
export const Toggled: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="subtle-primary" toggled>Toggled Primary</Button>
      <Button variant="subtle-secondary" toggled>Toggled Secondary</Button>
      <Button variant="subtle-primary" icon={<StarIcon/>} toggled aria-label="Favorited"/>
      <Button variant="subtle-secondary" icon={<StarIcon/>} toggled aria-label="Favorited"/>
    </div>
  ),
}

// Using text prop
export const WithTextProp: Story = {
  args: {
    text: 'Using text prop',
    variant: 'primary',
  },
}

// Full width example
export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Button variant="primary" className="w-full">Full Width Button</Button>
    </div>
  ),
}

// Form buttons
export const FormButtons: Story = {
  render: () => (
    <form
      onSubmit={(e) => {
        e.preventDefault(); alert('Form submitted!')
      }}
      className="flex gap-4"
    >
      <Button variant="secondary" formType="reset">Reset</Button>
      <Button variant="primary" formType="submit">Submit</Button>
    </form>
  ),
}

// Button group example
export const ButtonGroup: Story = {
  render: () => (
    <div className="flex">
      <Button variant="secondary" className="rounded-r-none border-r-0">Left</Button>
      <Button variant="secondary" className="rounded-none border-r-0">Center</Button>
      <Button variant="secondary" className="rounded-l-none">Right</Button>
    </div>
  ),
}

// Interactive playground
export const Playground: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'm',
    disabled: false,
    loading: false,
    toggled: false,
  },
}

// All states for visual testing
export const AllStates: Story = {
  render: () => (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-lg font-semibold">Primary Variant</h3>
        <div className="flex items-center gap-4">
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading</Button>
          <Button variant="primary" leftIcon={<PlusIcon/>}>With Icon</Button>
        </div>
      </section>
      <section>
        <h3 className="mb-4 text-lg font-semibold">Secondary Variant</h3>
        <div className="flex items-center gap-4">
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="secondary" loading>Loading</Button>
          <Button variant="secondary" leftIcon={<PlusIcon/>}>With Icon</Button>
        </div>
      </section>
      <section>
        <h3 className="mb-4 text-lg font-semibold">Subtle Primary Variant</h3>
        <div className="flex items-center gap-4">
          <Button variant="subtle-primary">Default</Button>
          <Button variant="subtle-primary" toggled>Toggled</Button>
          <Button variant="subtle-primary" disabled>Disabled</Button>
          <Button variant="subtle-primary" loading>Loading</Button>
        </div>
      </section>
      <section>
        <h3 className="mb-4 text-lg font-semibold">Destructive Variant</h3>
        <div className="flex items-center gap-4">
          <Button variant="destructive">Default</Button>
          <Button variant="destructive" disabled>Disabled</Button>
          <Button variant="destructive" loading>Loading</Button>
          <Button variant="destructive" leftIcon={<PlusIcon/>}>With Icon</Button>
        </div>
      </section>
    </div>
  ),
}
