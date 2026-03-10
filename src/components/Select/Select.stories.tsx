import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from './Select'

const meta = {
  title: 'Components/Select',
  component: Select.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Select.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select.Root defaultValue="apple">
      <Select.Trigger placeholder="Select a fruit" aria-label="Fruit" />
      <Select.Popup>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
        <Select.Item value="grape">Grape</Select.Item>
      </Select.Popup>
    </Select.Root>
  ),
}

export const WithPlaceholder: Story = {
  render: () => (
    <Select.Root>
      <Select.Trigger placeholder="Choose an option..." aria-label="Options" />
      <Select.Popup>
        <Select.Item value="option1">Option 1</Select.Item>
        <Select.Item value="option2">Option 2</Select.Item>
        <Select.Item value="option3">Option 3</Select.Item>
      </Select.Popup>
    </Select.Root>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Select.Root>
      <Select.Trigger placeholder="Select a country" aria-label="Country" />
      <Select.Popup>
        <Select.Group>
          <Select.GroupLabel>North America</Select.GroupLabel>
          <Select.Item value="us">United States</Select.Item>
          <Select.Item value="ca">Canada</Select.Item>
          <Select.Item value="mx">Mexico</Select.Item>
        </Select.Group>
        <Select.Group>
          <Select.GroupLabel>Europe</Select.GroupLabel>
          <Select.Item value="uk">United Kingdom</Select.Item>
          <Select.Item value="fr">France</Select.Item>
          <Select.Item value="de">Germany</Select.Item>
        </Select.Group>
      </Select.Popup>
    </Select.Root>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select.Root disabled defaultValue="locked">
      <Select.Trigger placeholder="Disabled" aria-label="Disabled select" />
      <Select.Popup>
        <Select.Item value="locked">Locked Value</Select.Item>
      </Select.Popup>
    </Select.Root>
  ),
}

export const WithDisabledItems: Story = {
  render: () => (
    <Select.Root>
      <Select.Trigger placeholder="Select a plan" aria-label="Plan" />
      <Select.Popup>
        <Select.Item value="free">Free</Select.Item>
        <Select.Item value="pro">Pro</Select.Item>
        <Select.Item value="enterprise" disabled>Enterprise (Coming Soon)</Select.Item>
      </Select.Popup>
    </Select.Root>
  ),
}
