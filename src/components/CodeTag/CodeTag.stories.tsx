import type { Meta, StoryObj } from '@storybook/react-vite'
import { CodeTag } from './CodeTag'

const meta = {
  title: 'Components/CodeTag',
  component: CodeTag,
  tags: ['autodocs'],
} satisfies Meta<typeof CodeTag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'npm install',
  },
}

export const WithChildren: Story = {
  render: () => <CodeTag>const x = 42</CodeTag>,
}

export const InlineWithText: Story = {
  render: () => (
    <p>
      Run <CodeTag text="git status" /> to check your working tree, then{' '}
      <CodeTag text="git commit -m 'fix'" /> to commit.
    </p>
  ),
}

export const LongCode: Story = {
  args: {
    text: 'npx create-react-app my-app --template typescript',
  },
}
