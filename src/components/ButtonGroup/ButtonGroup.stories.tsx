import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../Button/Button'

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Save</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="primary">First</Button>
      <Button variant="secondary">Second</Button>
      <Button variant="subtle-primary">Third</Button>
    </ButtonGroup>
  ),
}

export const MultipleButtons: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button variant="subtle-secondary">Back</Button>
      <Button variant="secondary">Save Draft</Button>
      <Button variant="primary">Publish</Button>
    </ButtonGroup>
  ),
}
