import type { Meta, StoryObj } from '@storybook/react'
import { CodeTag } from './CodeTag'

const meta: Meta<typeof CodeTag> = {
  title: 'Components/CodeTag',
  component: CodeTag,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content to display as code',
    },
    children: {
      control: 'text',
      description: 'Children content (alternative to text prop)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'An inline code display component rendering text with monospace font and subtle background styling for code snippets or technical terms.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CodeTag>

export const Default: Story = {
  args: {
    text: 'npm install',
  },
}

export const WithChildren: Story = {
  args: {
    children: 'const x = 1',
  },
}

export const InlineWithText: Story = {
  render: () => (
    <p>
      Run <CodeTag text="npm install" /> to install dependencies, then{' '}
      <CodeTag text="npm run dev" /> to start the development server.
    </p>
  ),
}

export const VariousCodeExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p>
        Use the <CodeTag text="useState" /> hook for state management.
      </p>
      <p>
        Install via <CodeTag text="pnpm add @nectary/react" />.
      </p>
      <p>
        The variable <CodeTag>myVariable</CodeTag> is undefined.
      </p>
      <p>
        Press <CodeTag text="Ctrl+C" /> to copy.
      </p>
    </div>
  ),
}

export const LongCode: Story = {
  args: {
    text: 'const veryLongVariableName = someFunction(arg1, arg2, arg3)',
  },
}

export const WithCustomClassName: Story = {
  args: {
    text: 'custom styled',
    className: 'text-lg',
  },
}
