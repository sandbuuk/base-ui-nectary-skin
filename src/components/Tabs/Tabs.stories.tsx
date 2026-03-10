import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from './Tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">Account</Tabs.Tab>
        <Tabs.Tab value="tab2">Notifications</Tabs.Tab>
        <Tabs.Tab value="tab3">Security</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">
        <p>Manage your account settings and preferences.</p>
      </Tabs.Panel>
      <Tabs.Panel value="tab2">
        <p>Configure your notification preferences.</p>
      </Tabs.Panel>
      <Tabs.Panel value="tab3">
        <p>Update your security and privacy settings.</p>
      </Tabs.Panel>
    </Tabs.Root>
  ),
}

export const TwoTabs: Story = {
  render: () => (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="details">Details</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">
        <p>A high-level overview of the item.</p>
      </Tabs.Panel>
      <Tabs.Panel value="details">
        <p>Detailed information about the item.</p>
      </Tabs.Panel>
    </Tabs.Root>
  ),
}

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs.Root defaultValue="active">
      <Tabs.List>
        <Tabs.Tab value="active">Active</Tabs.Tab>
        <Tabs.Tab value="pending">Pending</Tabs.Tab>
        <Tabs.Tab value="archived" disabled>Archived</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="active">
        <p>Active items are listed here.</p>
      </Tabs.Panel>
      <Tabs.Panel value="pending">
        <p>Pending items awaiting approval.</p>
      </Tabs.Panel>
      <Tabs.Panel value="archived">
        <p>Archived items.</p>
      </Tabs.Panel>
    </Tabs.Root>
  ),
}

export const ManyTabs: Story = {
  render: () => (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">General</Tabs.Tab>
        <Tabs.Tab value="tab2">Appearance</Tabs.Tab>
        <Tabs.Tab value="tab3">Integrations</Tabs.Tab>
        <Tabs.Tab value="tab4">Billing</Tabs.Tab>
        <Tabs.Tab value="tab5">Advanced</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1"><p>General settings.</p></Tabs.Panel>
      <Tabs.Panel value="tab2"><p>Appearance settings.</p></Tabs.Panel>
      <Tabs.Panel value="tab3"><p>Manage integrations.</p></Tabs.Panel>
      <Tabs.Panel value="tab4"><p>Billing and subscription.</p></Tabs.Panel>
      <Tabs.Panel value="tab5"><p>Advanced configuration.</p></Tabs.Panel>
    </Tabs.Root>
  ),
}
