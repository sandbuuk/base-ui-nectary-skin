import { fn } from '@storybook/test'
import { useState } from 'react'
import { Tabs, TabsGroup, TabsIconOption, TabsOption } from './Tabs'
import type { Meta, StoryObj } from '@storybook/react'

// Simple icon component for stories
const HomeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color: 'var(--sinch-global-color-icon, currentColor)' }}
  >
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
)

const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color: 'var(--sinch-global-color-icon, currentColor)' }}
  >
    <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
)

const UserIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color: 'var(--sinch-global-color-icon, currentColor)' }}
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
)

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Controlled selected value',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value for uncontrolled usage',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the tab list',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

// Default with text tabs
export const Default: Story = {
  args: {
    'aria-label': 'Navigation tabs',
    defaultValue: 'tab1',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsOption value="tab1" text="Tab 1" />
      <TabsOption value="tab2" text="Tab 2" />
      <TabsOption value="tab3" text="Tab 3" />
    </Tabs>
  ),
}

// With icons and text
export const WithIcons: Story = {
  args: {
    'aria-label': 'Navigation tabs',
    defaultValue: 'home',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsOption value="home" text="Home" icon={<HomeIcon />} />
      <TabsOption value="settings" text="Settings" icon={<SettingsIcon />} />
      <TabsOption value="profile" text="Profile" icon={<UserIcon />} />
    </Tabs>
  ),
}

// Icon-only tabs
export const IconOnly: Story = {
  args: {
    'aria-label': 'Icon navigation',
    defaultValue: 'home',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsIconOption value="home" aria-label="Home" icon={<HomeIcon />} />
      <TabsIconOption value="settings" aria-label="Settings" icon={<SettingsIcon />} />
      <TabsIconOption value="profile" aria-label="Profile" icon={<UserIcon />} />
    </Tabs>
  ),
}

// With disabled tab
export const WithDisabledTab: Story = {
  args: {
    'aria-label': 'Navigation tabs',
    defaultValue: 'tab1',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsOption value="tab1" text="Tab 1" />
      <TabsOption value="tab2" text="Tab 2 (Disabled)" disabled />
      <TabsOption value="tab3" text="Tab 3" />
    </Tabs>
  ),
}

// All disabled
export const AllDisabled: Story = {
  args: {
    'aria-label': 'Navigation tabs',
    defaultValue: 'tab1',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsOption value="tab1" text="Tab 1" disabled />
      <TabsOption value="tab2" text="Tab 2" disabled />
      <TabsOption value="tab3" text="Tab 3" disabled />
    </Tabs>
  ),
}

// Controlled example
export const Controlled: Story = {
  args: {
    'aria-label': 'Controlled tabs',
  },
  render: function ControlledTabs() {
    const [value, setValue] = useState('tab1')

    return (
      <div className="flex flex-col gap-4">
        <Tabs aria-label="Controlled tabs" value={value} onChange={setValue}>
          <TabsOption value="tab1" text={`Tab 1 ${value === 'tab1' ? '(active)' : ''}`} />
          <TabsOption value="tab2" text={`Tab 2 ${value === 'tab2' ? '(active)' : ''}`} />
          <TabsOption value="tab3" text={`Tab 3 ${value === 'tab3' ? '(active)' : ''}`} />
        </Tabs>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('tab1')}
          >
            Select Tab 1
          </button>
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('tab2')}
          >
            Select Tab 2
          </button>
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('tab3')}
          >
            Select Tab 3
          </button>
        </div>
        <p className="text-sm text-foreground-muted">
          Current value: <strong>{value}</strong>
        </p>
      </div>
    )
  },
}

// Using TabsGroup compound component
export const UsingTabsGroup: Story = {
  args: {
    'aria-label': 'Navigation tabs',
    defaultValue: 'overview',
  },
  render: (args) => (
    <TabsGroup {...args}>
      <TabsGroup.Option value="overview" text="Overview" />
      <TabsGroup.Option value="analytics" text="Analytics" />
      <TabsGroup.Option value="reports" text="Reports" />
      <TabsGroup.Option value="notifications" text="Notifications" />
    </TabsGroup>
  ),
}

// Mixed tabs (text and icon-only)
export const MixedTabs: Story = {
  args: {
    'aria-label': 'Mixed navigation',
    defaultValue: 'home',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsOption value="home" text="Home" icon={<HomeIcon />} />
      <TabsOption value="dashboard" text="Dashboard" />
      <TabsIconOption value="settings" aria-label="Settings" icon={<SettingsIcon />} />
    </Tabs>
  ),
}

// Many tabs
export const ManyTabs: Story = {
  args: {
    'aria-label': 'Navigation tabs',
    defaultValue: 'tab1',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsOption value="tab1" text="Overview" />
      <TabsOption value="tab2" text="Analytics" />
      <TabsOption value="tab3" text="Reports" />
      <TabsOption value="tab4" text="Notifications" />
      <TabsOption value="tab5" text="Settings" />
      <TabsOption value="tab6" text="Help" />
    </Tabs>
  ),
}

// Tab panel content example
export const WithTabPanels: Story = {
  render: function TabPanelsExample() {
    const [activeTab, setActiveTab] = useState('tab1')

    return (
      <div className="w-full">
        <Tabs aria-label="Content tabs" value={activeTab} onChange={setActiveTab}>
          <TabsOption value="tab1" text="Account" />
          <TabsOption value="tab2" text="Password" />
          <TabsOption value="tab3" text="Notifications" />
        </Tabs>
        <div className="p-4 border border-t-0 border-border rounded-b-md">
          {activeTab === 'tab1' && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Account Settings</h3>
              <p className="text-foreground-muted">Manage your account settings and preferences.</p>
            </div>
          )}
          {activeTab === 'tab2' && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Password Settings</h3>
              <p className="text-foreground-muted">Change your password and security settings.</p>
            </div>
          )}
          {activeTab === 'tab3' && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Notification Settings</h3>
              <p className="text-foreground-muted">Configure your notification preferences.</p>
            </div>
          )}
        </div>
      </div>
    )
  },
}

// Keyboard navigation demo
export const KeyboardNavigation: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-foreground-muted mb-2">
        Use Tab to focus, Arrow Left/Right to navigate between tabs
      </p>
      <Tabs aria-label="Keyboard navigation demo" defaultValue="tab1">
        <TabsOption value="tab1" text="Tab 1" />
        <TabsOption value="tab2" text="Tab 2" />
        <TabsOption value="tab3" text="Tab 3 (Disabled)" disabled />
        <TabsOption value="tab4" text="Tab 4" />
      </Tabs>
    </div>
  ),
}

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Default Text Tabs</h3>
        <Tabs aria-label="Text tabs" defaultValue="tab1">
          <TabsOption value="tab1" text="Selected" />
          <TabsOption value="tab2" text="Unselected" />
          <TabsOption value="tab3" text="Another" />
        </Tabs>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Tabs with Icons</h3>
        <Tabs aria-label="Tabs with icons" defaultValue="home">
          <TabsOption value="home" text="Home" icon={<HomeIcon />} />
          <TabsOption value="settings" text="Settings" icon={<SettingsIcon />} />
          <TabsOption value="profile" text="Profile" icon={<UserIcon />} />
        </Tabs>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Icon-only Tabs</h3>
        <Tabs aria-label="Icon tabs" defaultValue="home">
          <TabsIconOption value="home" aria-label="Home" icon={<HomeIcon />} />
          <TabsIconOption value="settings" aria-label="Settings" icon={<SettingsIcon />} />
          <TabsIconOption value="profile" aria-label="Profile" icon={<UserIcon />} />
        </Tabs>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">With Disabled Tab</h3>
        <Tabs aria-label="Tabs with disabled" defaultValue="tab1">
          <TabsOption value="tab1" text="Enabled" />
          <TabsOption value="tab2" text="Disabled" disabled />
          <TabsOption value="tab3" text="Enabled" />
        </Tabs>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">All Disabled</h3>
        <Tabs aria-label="All disabled tabs" defaultValue="tab1">
          <TabsOption value="tab1" text="Disabled Selected" disabled />
          <TabsOption value="tab2" text="Disabled" disabled />
        </Tabs>
      </div>
    </div>
  ),
}
