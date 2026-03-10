import type { Meta, StoryObj } from '@storybook/react-vite'
import { Collapsible } from './Collapsible'

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Collapsible.Root>
      <Collapsible.Trigger>
        <button type="button">Toggle Content</button>
      </Collapsible.Trigger>
      <Collapsible.Panel>
        <div style={{ padding: '12px 0' }}>
          <p style={{ margin: 0 }}>
            This is collapsible content that can be shown or hidden by clicking the trigger above.
          </p>
        </div>
      </Collapsible.Panel>
    </Collapsible.Root>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible.Root defaultOpen>
      <Collapsible.Trigger>
        <button type="button">Advanced Settings</button>
      </Collapsible.Trigger>
      <Collapsible.Panel>
        <div style={{ padding: '12px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label>
            <input type="checkbox" /> Enable debug mode
          </label>
          <label>
            <input type="checkbox" /> Show performance overlay
          </label>
          <label>
            <input type="checkbox" /> Verbose logging
          </label>
        </div>
      </Collapsible.Panel>
    </Collapsible.Root>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Collapsible.Root disabled>
      <Collapsible.Trigger>
        <button type="button">Disabled Collapsible</button>
      </Collapsible.Trigger>
      <Collapsible.Panel>
        <p style={{ margin: 0, padding: '12px 0' }}>This content cannot be toggled.</p>
      </Collapsible.Panel>
    </Collapsible.Root>
  ),
}

export const KeepMounted: Story = {
  render: () => (
    <Collapsible.Root>
      <Collapsible.Trigger>
        <button type="button">Keep Mounted Panel</button>
      </Collapsible.Trigger>
      <Collapsible.Panel keepMounted>
        <p style={{ margin: 0, padding: '12px 0' }}>
          This panel stays in the DOM even when collapsed, preserving internal state.
        </p>
      </Collapsible.Panel>
    </Collapsible.Root>
  ),
}
