import type { Meta, StoryObj } from '@storybook/react-vite'
import { FilePicker } from './FilePicker'

const meta = {
  title: 'Components/FilePicker',
  component: FilePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof FilePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onChange: (files) => console.log('Files selected:', files),
  },
}

export const ImagesOnly: Story = {
  args: {
    accept: 'image/*',
    onChange: (files) => console.log('Images selected:', files),
  },
}

export const MultipleFiles: Story = {
  args: {
    multiple: true,
    onChange: (files) => console.log('Multiple files:', files),
  },
}

export const WithMaxSize: Story = {
  args: {
    maxSize: 1024 * 1024, // 1MB
    onChange: (files) => console.log('Files:', files),
    onInvalid: (reason) => alert(`Invalid file: ${reason}`),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const CustomTrigger: Story = {
  render: () => (
    <FilePicker
      accept=".pdf,.doc,.docx"
      onChange={(files) => console.log('Documents:', files)}
    >
      <button type="button" style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Upload Document
      </button>
    </FilePicker>
  ),
}
