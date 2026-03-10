import type { Meta, StoryObj } from '@storybook/react-vite'
import { RichText } from './RichText'

const meta = {
  title: 'Components/RichText',
  component: RichText,
  tags: ['autodocs'],
} satisfies Meta<typeof RichText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: '<p>This is a paragraph of <strong>rich text</strong> with <em>italic</em> formatting.</p>',
  },
}

export const WithHeadings: Story = {
  args: {
    content: `
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Body text below the headings.</p>
    `,
  },
}

export const WithList: Story = {
  args: {
    content: `
      <h3>Features</h3>
      <ul>
        <li>Accessible components</li>
        <li>Customizable styling</li>
        <li>TypeScript support</li>
      </ul>
      <h3>Steps</h3>
      <ol>
        <li>Install the package</li>
        <li>Import components</li>
        <li>Start building</li>
      </ol>
    `,
  },
}

export const WithLinks: Story = {
  args: {
    content: `
      <p>Visit <a href="https://example.com">our website</a> for more information.</p>
      <p>Or check the <a href="https://example.com/docs">documentation</a> to get started.</p>
    `,
  },
}

export const ComplexContent: Story = {
  args: {
    content: `
      <h2>Release Notes</h2>
      <p>Version <strong>2.0</strong> includes the following changes:</p>
      <ul>
        <li>New <code>DatePicker</code> component</li>
        <li>Improved <em>accessibility</em> across all components</li>
        <li>Bug fixes and performance improvements</li>
      </ul>
      <blockquote>
        <p>This release is a major milestone for the project.</p>
      </blockquote>
    `,
  },
}
