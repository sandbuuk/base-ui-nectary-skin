import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Card, CardContainer, CardTitle } from './Card'
import { Icon } from '../icon'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
    clickable: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

// =============================================================================
// CARD STORIES
// =============================================================================

export const Default: Story = {
  args: {
    title: <CardTitle text="Card Title"/>,
    content: 'This is the card content. It can contain any text or components.',
  },
}

export const WithIcon: Story = {
  args: {
    title: (
      <CardTitle
        text="Card with Icon"
        icon={<Icon name="star" iconsVersion="2"/>}
      />
    ),
    content: 'This card has an icon in the title.',
  },
}

export const VerticalLayout: Story = {
  args: {
    title: (
      <CardTitle
        text="Vertical Icon Layout"
        orientation="vertical"
        icon={<Icon name="star" iconsVersion="2"/>}
      />
    ),
    content: 'The icon is displayed above the title text.',
  },
}

export const Clickable: Story = {
  args: {
    title: <CardTitle text="Clickable Card"/>,
    content: 'Click me! Hover and active states are visible.',
    onClick: fn(),
  },
}

export const Selected: Story = {
  args: {
    title: <CardTitle text="Selected Card"/>,
    content: 'This card is in a selected state.',
    selected: true,
  },
}

export const Disabled: Story = {
  args: {
    title: <CardTitle text="Disabled Card"/>,
    content: 'This card is disabled and cannot be interacted with.',
    disabled: true,
  },
}

export const SelectedDisabled: Story = {
  name: 'Selected + Disabled',
  args: {
    title: <CardTitle text="Selected & Disabled"/>,
    content: 'This card is both selected and disabled.',
    selected: true,
    disabled: true,
  },
}

export const WithMedia: Story = {
  args: {
    media: (
      <img
        src="https://placehold.co/400x200"
        alt="Placeholder"
        className="w-full h-auto"
      />
    ),
    title: <CardTitle text="Card with Media"/>,
    content: 'This card has an image at the top.',
  },
}

export const WithFooter: Story = {
  args: {
    title: <CardTitle text="Card with Footer"/>,
    content: 'This card has a footer area.',
    footer: (
      <div className="flex gap-2">
        <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded">
          Action
        </button>
        <button className="px-3 py-1 text-sm border border-border rounded">
          Cancel
        </button>
      </div>
    ),
  },
}

export const FullExample: Story = {
  args: {
    media: (
      <img
        src="https://placehold.co/400x150"
        alt="Placeholder"
        className="w-full h-auto"
      />
    ),
    title: (
      <CardTitle
        text="Full Featured Card"
        icon={<Icon name="star" iconsVersion="2"/>}
      />
    ),
    content: 'This card demonstrates all the features: media, title with icon, content, and footer.',
    footer: (
      <div className="flex gap-2">
        <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded">
          Learn More
        </button>
      </div>
    ),
    onClick: fn(),
  },
}

export const WithEllipsis: Story = {
  args: {
    title: (
      <CardTitle
        text="This is a very long title that should be truncated with ellipsis when it exceeds the available width"
        ellipsis
      />
    ),
    content: 'The title text is truncated.',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 250 }}>
        <Story/>
      </div>
    ),
  ],
}

// =============================================================================
// CARD TITLE STORIES
// =============================================================================

export const TitleDefault: StoryObj<typeof CardTitle> = {
  name: 'CardTitle - Default',
  render: () => <CardTitle text="Default Title"/>,
}

export const TitleWithIcon: StoryObj<typeof CardTitle> = {
  name: 'CardTitle - With Icon',
  render: () => (
    <CardTitle
      text="Title with Icon"
      icon={<Icon name="circle-info" iconsVersion="2"/>}
    />
  ),
}

export const TitleVertical: StoryObj<typeof CardTitle> = {
  name: 'CardTitle - Vertical',
  render: () => (
    <CardTitle
      text="Vertical Title"
      orientation="vertical"
      icon={<Icon name="circle-info" iconsVersion="2"/>}
    />
  ),
}

export const TitleEllipsis: StoryObj<typeof CardTitle> = {
  name: 'CardTitle - Ellipsis',
  render: () => (
    <div style={{ width: 150 }}>
      <CardTitle
        text="This is a very long title that will be truncated"
        ellipsis
      />
    </div>
  ),
}

// =============================================================================
// CARD CONTAINER STORIES
// =============================================================================

export const ContainerDefault: StoryObj<typeof CardContainer> = {
  name: 'CardContainer - Default',
  render: () => (
    <CardContainer>
      <p>Content inside the card container</p>
      <p>More content here</p>
    </CardContainer>
  ),
}

export const ContainerWithMultipleCards: StoryObj<typeof CardContainer> = {
  name: 'CardContainer - Multiple Cards',
  render: () => (
    <CardContainer>
      <div className="flex flex-col gap-4">
        <Card
          title={<CardTitle text="Card 1"/>}
          content="First card inside the container"
        />
        <Card
          title={<CardTitle text="Card 2"/>}
          content="Second card inside the container"
        />
        <Card
          title={<CardTitle text="Card 3"/>}
          content="Third card inside the container"
        />
      </div>
    </CardContainer>
  ),
}

export const ContainerWithHeight: StoryObj<typeof CardContainer> = {
  name: 'CardContainer - Fixed Height (Scrollable)',
  render: () => (
    <div style={{ height: 200 }}>
      <CardContainer>
        <div className="flex flex-col gap-4">
          <Card
            title={<CardTitle text="Card 1"/>}
            content="First card"
          />
          <Card
            title={<CardTitle text="Card 2"/>}
            content="Second card"
          />
          <Card
            title={<CardTitle text="Card 3"/>}
            content="Third card"
          />
          <Card
            title={<CardTitle text="Card 4"/>}
            content="Fourth card"
          />
        </div>
      </CardContainer>
    </div>
  ),
}

// =============================================================================
// ALL STATES
// =============================================================================

export const AllStates: Story = {
  name: 'All States Overview',
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Default States</h3>
      <div className="flex gap-4 flex-wrap">
        <Card
          title={<CardTitle text="Default"/>}
          content="Default state"
        />
        <Card
          title={<CardTitle text="Clickable"/>}
          content="Hover me"
          onClick={() => {}}
        />
        <Card
          title={<CardTitle text="Selected"/>}
          content="Selected state"
          selected
        />
        <Card
          title={<CardTitle text="Disabled"/>}
          content="Disabled state"
          disabled
        />
      </div>

      <h3 className="text-lg font-semibold mt-4">Combined States</h3>
      <div className="flex gap-4 flex-wrap">
        <Card
          title={<CardTitle text="Selected + Clickable"/>}
          content="Selected and clickable"
          selected
          onClick={() => {}}
        />
        <Card
          title={<CardTitle text="Selected + Disabled"/>}
          content="Selected and disabled"
          selected
          disabled
        />
      </div>

      <h3 className="text-lg font-semibold mt-4">With Icons</h3>
      <div className="flex gap-4 flex-wrap">
        <Card
          title={
            <CardTitle
              text="Horizontal Icon"
              icon={<Icon name="star" iconsVersion="2"/>}
            />
          }
          content="Icon on the left"
        />
        <Card
          title={
            <CardTitle
              text="Vertical Icon"
              orientation="vertical"
              icon={<Icon name="star" iconsVersion="2"/>}
            />
          }
          content="Icon on top"
        />
      </div>
    </div>
  ),
}
