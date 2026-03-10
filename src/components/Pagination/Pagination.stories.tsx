import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pagination } from './Pagination'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 1,
    max: 10,
  },
}

export const FewPages: Story = {
  args: {
    value: 3,
    max: 5,
  },
}

export const ManyPages: Story = {
  args: {
    value: 5,
    max: 20,
  },
}

export const FirstPage: Story = {
  args: {
    value: 1,
    max: 10,
  },
}

export const LastPage: Story = {
  args: {
    value: 10,
    max: 10,
  },
}

export const Controlled: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return (
      <div>
        <Pagination value={page} max={15} onValueChange={setPage} />
        <p style={{ marginTop: 12, fontSize: 14, color: '#666' }}>Current page: {page}</p>
      </div>
    )
  },
}
