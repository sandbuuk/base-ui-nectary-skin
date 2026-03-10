import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion } from './Accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion.Root defaultValue={['item1']}>
      <Accordion.Item value="item1" title="What is Nectary?">
        Nectary is a React component library built on Base UI, providing accessible and customizable
        UI components for modern web applications.
      </Accordion.Item>
      <Accordion.Item value="item2" title="How do I install it?">
        You can install Nectary via npm or yarn. Run npm install nectary-react to get started.
      </Accordion.Item>
      <Accordion.Item value="item3" title="Is it accessible?">
        Yes, all components follow WAI-ARIA patterns and support keyboard navigation out of the box.
      </Accordion.Item>
    </Accordion.Root>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Accordion.Root openMultiple defaultValue={['item1', 'item2']}>
      <Accordion.Item value="item1" title="Section One">
        Content for the first section. Multiple sections can be open simultaneously.
      </Accordion.Item>
      <Accordion.Item value="item2" title="Section Two">
        Content for the second section. This is also open by default.
      </Accordion.Item>
      <Accordion.Item value="item3" title="Section Three">
        Content for the third section.
      </Accordion.Item>
    </Accordion.Root>
  ),
}

export const WithSubtitles: Story = {
  render: () => (
    <Accordion.Root>
      <Accordion.Item value="plan" title="Plan" subtitle="Pro - $29/mo">
        Manage your subscription plan and billing details.
      </Accordion.Item>
      <Accordion.Item value="team" title="Team" subtitle="5 members">
        Add or remove team members and manage permissions.
      </Accordion.Item>
      <Accordion.Item value="usage" title="Usage" subtitle="72% of quota">
        View your current usage statistics and limits.
      </Accordion.Item>
    </Accordion.Root>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <Accordion.Root>
      <Accordion.Item value="item1" title="Available Section">
        This section can be toggled.
      </Accordion.Item>
      <Accordion.Item value="item2" title="Disabled Section" disabled>
        This content is not accessible because the item is disabled.
      </Accordion.Item>
      <Accordion.Item value="item3" title="Another Available Section">
        This section can also be toggled.
      </Accordion.Item>
    </Accordion.Root>
  ),
}
