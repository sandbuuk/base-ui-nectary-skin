import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumb } from './Breadcrumb'

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
      <Breadcrumb.Item>Current Page</Breadcrumb.Item>
    </Breadcrumb>
  ),
}

export const TwoLevels: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item>Settings</Breadcrumb.Item>
    </Breadcrumb>
  ),
}

export const DeepNesting: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/settings">Settings</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/settings/security">Security</Breadcrumb.Item>
      <Breadcrumb.Item>Two-Factor Auth</Breadcrumb.Item>
    </Breadcrumb>
  ),
}
