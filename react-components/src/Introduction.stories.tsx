import type { Meta, StoryObj } from '@storybook/react'

const Intro = () => (
  <div className="p-8 max-w-2xl">
    <h1 className="text-3xl font-bold mb-4 text-foreground">Nectary React Components</h1>
    <p className="text-foreground-muted mb-4">
      Native React implementation of the Nectary design system.
    </p>
    <p className="text-foreground-caption text-sm">
      Components are styled with Tailwind CSS and use the same design tokens as the web components.
    </p>
  </div>
)

const meta: Meta<typeof Intro> = {
  title: 'Introduction',
  component: Intro,
}

export default meta
type Story = StoryObj<typeof Intro>

export const Welcome: Story = {}
