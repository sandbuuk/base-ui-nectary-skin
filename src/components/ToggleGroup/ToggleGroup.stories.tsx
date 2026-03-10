import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToggleGroup } from './ToggleGroup'
import { Toggle } from '../Toggle/Toggle'
import { Icon } from '../Icon/Icon'

const meta = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: ['bold'],
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <Toggle value="bold" aria-label="Bold">
        <Icon name="format_bold" size="s" />
      </Toggle>
      <Toggle value="italic" aria-label="Italic">
        <Icon name="format_italic" size="s" />
      </Toggle>
      <Toggle value="underline" aria-label="Underline">
        <Icon name="format_underlined" size="s" />
      </Toggle>
    </ToggleGroup>
  ),
}

export const Multiple: Story = {
  args: {
    multiple: true,
    defaultValue: ['bold', 'italic'],
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <Toggle value="bold" aria-label="Bold">
        <Icon name="format_bold" size="s" />
      </Toggle>
      <Toggle value="italic" aria-label="Italic">
        <Icon name="format_italic" size="s" />
      </Toggle>
      <Toggle value="underline" aria-label="Underline">
        <Icon name="format_underlined" size="s" />
      </Toggle>
    </ToggleGroup>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    defaultValue: ['left'],
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <Toggle value="left" aria-label="Align left">
        <Icon name="format_align_left" size="s" />
      </Toggle>
      <Toggle value="center" aria-label="Align center">
        <Icon name="format_align_center" size="s" />
      </Toggle>
      <Toggle value="right" aria-label="Align right">
        <Icon name="format_align_right" size="s" />
      </Toggle>
    </ToggleGroup>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: ['bold'],
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <Toggle value="bold" aria-label="Bold">
        <Icon name="format_bold" size="s" />
      </Toggle>
      <Toggle value="italic" aria-label="Italic">
        <Icon name="format_italic" size="s" />
      </Toggle>
    </ToggleGroup>
  ),
}
