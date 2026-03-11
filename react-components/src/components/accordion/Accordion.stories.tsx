import { fn } from '@storybook/test'
import { useState } from 'react'
import { Accordion, AccordionGroup, AccordionItem } from './Accordion'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Controlled expanded value(s)',
    },
    defaultValue: {
      control: 'text',
      description: 'Default expanded value(s) for uncontrolled usage',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple items to be expanded at once',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A collapsible container that displays content sections with expand/collapse toggle, supporting single and multiple expanded items with optional status indicators. Compose with `AccordionItem` children, or use the `AccordionGroup` compound export (`AccordionGroup.Item`).\n\nKeyboard: Tab to focus items. Enter or Space to expand/collapse.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

// Default accordion
export const Default: Story = {
  args: {
    defaultValue: 'item1',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item1" label="Section 1">
        <p className="text-foreground">
          Content for section 1. This is the expanded content area where you can place any content.
        </p>
      </AccordionItem>
      <AccordionItem value="item2" label="Section 2">
        <p className="text-foreground">
          Content for section 2. Accordions are useful for organizing content into collapsible sections.
        </p>
      </AccordionItem>
      <AccordionItem value="item3" label="Section 3">
        <p className="text-foreground">
          Content for section 3. Each section can contain any type of content.
        </p>
      </AccordionItem>
    </Accordion>
  ),
}

// Multiple expanded
export const Multiple: Story = {
  args: {
    defaultValue: 'item1,item2',
    multiple: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item1" label="Section 1">
        <p className="text-foreground">
          Content for section 1. Multiple sections can be open at once.
        </p>
      </AccordionItem>
      <AccordionItem value="item2" label="Section 2">
        <p className="text-foreground">
          Content for section 2. Notice how both sections are initially expanded.
        </p>
      </AccordionItem>
      <AccordionItem value="item3" label="Section 3">
        <p className="text-foreground">
          Content for section 3. You can open this one too!
        </p>
      </AccordionItem>
    </Accordion>
  ),
}

// With optional text
export const WithOptionalText: Story = {
  args: {
    defaultValue: 'item1',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item1" label="Profile Settings" optionalText="3 options">
        <p className="text-foreground">
          Configure your profile settings here.
        </p>
      </AccordionItem>
      <AccordionItem value="item2" label="Notification Preferences" optionalText="5 options">
        <p className="text-foreground">
          Manage your notification preferences.
        </p>
      </AccordionItem>
      <AccordionItem value="item3" label="Privacy Settings" optionalText="2 options">
        <p className="text-foreground">
          Control your privacy settings.
        </p>
      </AccordionItem>
    </Accordion>
  ),
}

// With status indicators
export const WithStatus: Story = {
  args: {},
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item1" label="Verification Complete" status="success">
        <p className="text-foreground">
          Your account has been verified successfully.
        </p>
      </AccordionItem>
      <AccordionItem value="item2" label="Payment Required" status="warn">
        <p className="text-foreground">
          Please update your payment information.
        </p>
      </AccordionItem>
      <AccordionItem value="item3" label="Action Required" status="error">
        <p className="text-foreground">
          There was an error processing your request.
        </p>
      </AccordionItem>
      <AccordionItem value="item4" label="New Feature Available" status="info">
        <p className="text-foreground">
          Check out our new feature release!
        </p>
      </AccordionItem>
    </Accordion>
  ),
}

// With disabled items
export const WithDisabledItems: Story = {
  args: {
    defaultValue: 'item1',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item1" label="Active Section">
        <p className="text-foreground">
          This section is active and can be interacted with.
        </p>
      </AccordionItem>
      <AccordionItem value="item2" label="Disabled Section" disabled>
        <p className="text-foreground">
          This content cannot be seen because the section is disabled.
        </p>
      </AccordionItem>
      <AccordionItem value="item3" label="Another Active Section">
        <p className="text-foreground">
          Another section that can be expanded.
        </p>
      </AccordionItem>
    </Accordion>
  ),
}

// Controlled example
export const Controlled: Story = {
  render: function ControlledAccordion() {
    const [value, setValue] = useState('item1')

    return (
      <div className="flex flex-col gap-4">
        <Accordion value={value} onChange={setValue}>
          <AccordionItem value="item1" label="Section 1">
            <p className="text-foreground">Content for section 1.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Section 2">
            <p className="text-foreground">Content for section 2.</p>
          </AccordionItem>
          <AccordionItem value="item3" label="Section 3">
            <p className="text-foreground">Content for section 3.</p>
          </AccordionItem>
        </Accordion>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('item1')}
          >
            Open Section 1
          </button>
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('item2')}
          >
            Open Section 2
          </button>
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => setValue('item3')}
          >
            Open Section 3
          </button>
          <button
            className="px-3 py-1 text-sm bg-surface-secondary text-foreground rounded-md"
            onClick={() => setValue('')}
          >
            Close All
          </button>
        </div>
      </div>
    )
  },
}

// Controlled multiple
export const ControlledMultiple: Story = {
  render: function ControlledMultipleAccordion() {
    const [value, setValue] = useState('item1,item2')

    const toggleItem = (item: string) => {
      const items = new Set(value.split(',').filter((v) => v.length > 0))

      if (items.has(item)) {
        items.delete(item)
      } else {
        items.add(item)
      }

      setValue(Array.from(items).join(','))
    }

    return (
      <div className="flex flex-col gap-4">
        <Accordion value={value} onChange={setValue} multiple>
          <AccordionItem value="item1" label="Section 1">
            <p className="text-foreground">Content for section 1.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Section 2">
            <p className="text-foreground">Content for section 2.</p>
          </AccordionItem>
          <AccordionItem value="item3" label="Section 3">
            <p className="text-foreground">Content for section 3.</p>
          </AccordionItem>
        </Accordion>
        <div className="flex gap-2 flex-wrap">
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => toggleItem('item1')}
          >
            Toggle 1
          </button>
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => toggleItem('item2')}
          >
            Toggle 2
          </button>
          <button
            className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md"
            onClick={() => toggleItem('item3')}
          >
            Toggle 3
          </button>
          <button
            className="px-3 py-1 text-sm bg-surface-secondary text-foreground rounded-md"
            onClick={() => setValue('item1,item2,item3')}
          >
            Open All
          </button>
          <button
            className="px-3 py-1 text-sm bg-surface-secondary text-foreground rounded-md"
            onClick={() => setValue('')}
          >
            Close All
          </button>
        </div>
        <p className="text-sm text-foreground-muted">Current value: {value || '(empty)'}</p>
      </div>
    )
  },
}

// Using AccordionGroup compound component
export const UsingAccordionGroup: Story = {
  args: {
    defaultValue: 'item1',
  },
  render: (args) => (
    <AccordionGroup {...args}>
      <AccordionGroup.Item value="item1" label="First Section">
        <p className="text-foreground">Content using the compound component pattern.</p>
      </AccordionGroup.Item>
      <AccordionGroup.Item value="item2" label="Second Section">
        <p className="text-foreground">This pattern provides better discoverability.</p>
      </AccordionGroup.Item>
      <AccordionGroup.Item value="item3" label="Third Section">
        <p className="text-foreground">All items are nested under AccordionGroup.</p>
      </AccordionGroup.Item>
    </AccordionGroup>
  ),
}

// With rich content
export const WithRichContent: Story = {
  args: {
    defaultValue: 'item1',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item1" label="Product Details">
        <div className="flex flex-col gap-4">
          <p className="text-foreground">
            Our product offers the following features:
          </p>
          <ul className="list-disc list-inside text-foreground">
            <li>Feature 1: High performance</li>
            <li>Feature 2: Easy to use</li>
            <li>Feature 3: Customizable</li>
          </ul>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md w-fit">
            Learn More
          </button>
        </div>
      </AccordionItem>
      <AccordionItem value="item2" label="Pricing Information">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-foreground">Basic Plan</span>
            <span className="text-foreground font-semibold">$9/month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground">Pro Plan</span>
            <span className="text-foreground font-semibold">$29/month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground">Enterprise</span>
            <span className="text-foreground font-semibold">Contact us</span>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem value="item3" label="FAQ">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-foreground font-semibold">Q: How do I get started?</p>
            <p className="text-foreground-muted">A: Sign up for a free trial and explore our features.</p>
          </div>
          <div>
            <p className="text-foreground font-semibold">Q: Is there a free tier?</p>
            <p className="text-foreground-muted">A: Yes, we offer a free tier with limited features.</p>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  ),
}

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Default (Single Selection)</h3>
        <Accordion defaultValue="item1">
          <AccordionItem value="item1" label="Expanded item">
            <p className="text-foreground">This item is expanded.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Collapsed item">
            <p className="text-foreground">This item is collapsed.</p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Multiple Selection</h3>
        <Accordion defaultValue="item1,item2" multiple>
          <AccordionItem value="item1" label="First expanded">
            <p className="text-foreground">First expanded content.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Second expanded">
            <p className="text-foreground">Second expanded content.</p>
          </AccordionItem>
          <AccordionItem value="item3" label="Collapsed">
            <p className="text-foreground">Collapsed content.</p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">With Status Indicators</h3>
        <Accordion>
          <AccordionItem value="item1" label="Success" status="success">
            <p className="text-foreground">Success status.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Warning" status="warn">
            <p className="text-foreground">Warning status.</p>
          </AccordionItem>
          <AccordionItem value="item3" label="Error" status="error">
            <p className="text-foreground">Error status.</p>
          </AccordionItem>
          <AccordionItem value="item4" label="Info" status="info">
            <p className="text-foreground">Info status.</p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">With Optional Text</h3>
        <Accordion defaultValue="item1">
          <AccordionItem value="item1" label="Settings" optionalText="3 options">
            <p className="text-foreground">Settings content.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Advanced" optionalText="5 options">
            <p className="text-foreground">Advanced content.</p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Disabled</h3>
        <Accordion defaultValue="item1">
          <AccordionItem value="item1" label="Enabled item">
            <p className="text-foreground">Enabled content.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Disabled item" disabled>
            <p className="text-foreground">Disabled content.</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
}
