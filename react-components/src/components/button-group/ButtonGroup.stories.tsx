import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup } from './ButtonGroup'
import { ButtonGroupItem } from './ButtonGroupItem'
import { Icon } from '../icon'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'subtle-primary', 'subtle-secondary', 'cta-primary', 'cta-secondary', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l'],
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupItem text="One" />
      <ButtonGroupItem text="Two" />
      <ButtonGroupItem text="Three" />
    </ButtonGroup>
  ),
  args: {
    variant: 'secondary',
    size: 'm',
  },
}

export const Primary: Story = {
  render: () => (
    <ButtonGroup variant="primary">
      <ButtonGroupItem text="Save" />
      <ButtonGroupItem text="Cancel" />
      <ButtonGroupItem text="Delete" />
    </ButtonGroup>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-foreground-muted text-sm mb-2">Primary</p>
        <ButtonGroup variant="primary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Secondary</p>
        <ButtonGroup variant="secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Subtle Primary</p>
        <ButtonGroup variant="subtle-primary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Subtle Secondary</p>
        <ButtonGroup variant="subtle-secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">CTA Primary</p>
        <ButtonGroup variant="cta-primary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">CTA Secondary</p>
        <ButtonGroup variant="cta-secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Destructive</p>
        <ButtonGroup variant="destructive">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div>
        <p className="text-foreground-muted text-sm mb-2">Extra Small (xs)</p>
        <ButtonGroup size="xs" variant="secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Small (s)</p>
        <ButtonGroup size="s" variant="secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Medium (m)</p>
        <ButtonGroup size="m" variant="secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Large (l)</p>
        <ButtonGroup size="l" variant="secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-foreground-muted text-sm mb-2">With Left Icons</p>
        <ButtonGroup variant="secondary">
          <ButtonGroupItem text="Edit" leftIcon={<Icon name="edit-contained" size="sm" />} />
          <ButtonGroupItem text="Copy" leftIcon={<Icon name="copy" size="sm" />} />
          <ButtonGroupItem text="Delete" leftIcon={<Icon name="delete" size="sm" />} />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Icon Only</p>
        <ButtonGroup variant="secondary">
          <ButtonGroupItem icon={<Icon name="edit-contained" size="sm" />} aria-label="Edit" />
          <ButtonGroupItem icon={<Icon name="copy" size="sm" />} aria-label="Copy" />
          <ButtonGroupItem icon={<Icon name="delete" size="sm" />} aria-label="Delete" />
        </ButtonGroup>
      </div>
    </div>
  ),
}

export const TwoItems: Story = {
  render: () => (
    <ButtonGroup variant="secondary">
      <ButtonGroupItem text="Yes" />
      <ButtonGroupItem text="No" />
    </ButtonGroup>
  ),
}

export const SingleItem: Story = {
  render: () => (
    <ButtonGroup variant="secondary">
      <ButtonGroupItem text="Only One" />
    </ButtonGroup>
  ),
}

export const ManyItems: Story = {
  render: () => (
    <ButtonGroup variant="secondary">
      <ButtonGroupItem text="1" />
      <ButtonGroupItem text="2" />
      <ButtonGroupItem text="3" />
      <ButtonGroupItem text="4" />
      <ButtonGroupItem text="5" />
      <ButtonGroupItem text="6" />
    </ButtonGroup>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <ButtonGroup variant="secondary">
      <ButtonGroupItem text="Enabled" />
      <ButtonGroupItem text="Disabled" disabled />
      <ButtonGroupItem text="Enabled" />
    </ButtonGroup>
  ),
}

export const WithToggledItem: Story = {
  render: () => (
    <ButtonGroup variant="subtle-primary">
      <ButtonGroupItem text="Option A" />
      <ButtonGroupItem text="Option B" toggled />
      <ButtonGroupItem text="Option C" />
    </ButtonGroup>
  ),
}
