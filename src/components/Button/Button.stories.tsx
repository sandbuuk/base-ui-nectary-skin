import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'subtle-primary',
        'subtle-secondary',
        'cta-primary',
        'cta-secondary',
        'destructive',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
}

export const SubtlePrimary: Story = {
  args: {
    variant: 'subtle-primary',
    children: 'Button',
  },
}

export const SubtleSecondary: Story = {
  args: {
    variant: 'subtle-secondary',
    children: 'Button',
  },
}

export const CtaPrimary: Story = {
  args: {
    variant: 'cta-primary',
    children: 'Button',
  },
}

export const CtaSecondary: Story = {
  args: {
    variant: 'cta-secondary',
    children: 'Button',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
}

export const SizeXS: Story = {
  args: {
    size: 'xs',
    children: 'Extra Small',
  },
}

export const SizeS: Story = {
  args: {
    size: 's',
    children: 'Small',
  },
}

export const SizeM: Story = {
  args: {
    size: 'm',
    children: 'Medium',
  },
}

export const SizeL: Story = {
  args: {
    size: 'l',
    children: 'Large',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}

export const Toggled: Story = {
  args: {
    toggled: true,
    children: 'Toggled',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
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

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button size="xs">XS</Button>
      <Button size="s">Small</Button>
      <Button size="m">Medium</Button>
      <Button size="l">Large</Button>
    </div>
  ),
}
