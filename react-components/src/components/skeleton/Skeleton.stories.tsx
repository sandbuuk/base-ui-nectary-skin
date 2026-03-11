import { Skeleton } from './Skeleton'
import { SkeletonItem } from './SkeletonItem'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A loading placeholder component with shimmer animation that matches content dimensions for smooth skeleton screen layouts.',
      },
    },
  },
  argTypes: {
    card: {
      control: 'boolean',
      description: 'Display as a card-like container with border and padding',
    },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: (args) => (
    <Skeleton {...args}>
      <SkeletonItem/>
      <SkeletonItem/>
      <SkeletonItem width="75%"/>
    </Skeleton>
  ),
}

export const Card: Story = {
  args: {
    card: true,
  },
  render: (args) => (
    <Skeleton {...args}>
      <SkeletonItem size="lg"/>
      <SkeletonItem/>
      <SkeletonItem/>
      <SkeletonItem width="50%"/>
    </Skeleton>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <Skeleton>
      <SkeletonItem size="xs"/>
      <SkeletonItem size="sm"/>
      <SkeletonItem size="md"/>
      <SkeletonItem size="lg"/>
    </Skeleton>
  ),
}

export const CustomWidths: Story = {
  render: () => (
    <Skeleton>
      <SkeletonItem width="100%"/>
      <SkeletonItem width="75%"/>
      <SkeletonItem width="50%"/>
      <SkeletonItem width="25%"/>
      <SkeletonItem width={200}/>
    </Skeleton>
  ),
}

export const ProfileCard: Story = {
  render: () => (
    <Skeleton card>
      <div className="flex gap-4 items-center">
        <SkeletonItem size="lg" className="w-12 rounded-full"/>
        <div className="flex flex-col gap-2 flex-1">
          <SkeletonItem size="sm" width="60%"/>
          <SkeletonItem size="xs" width="40%"/>
        </div>
      </div>
      <SkeletonItem/>
      <SkeletonItem/>
      <SkeletonItem width="80%"/>
    </Skeleton>
  ),
}

export const TableRows: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex gap-4">
          <SkeletonItem size="sm" className="w-8"/>
          <SkeletonItem size="sm" className="flex-1"/>
          <SkeletonItem size="sm" className="w-24"/>
          <SkeletonItem size="sm" className="w-16"/>
        </div>
      ))}
    </div>
  ),
}

export const ArticlePlaceholder: Story = {
  render: () => (
    <div className="max-w-2xl">
      <Skeleton>
        <SkeletonItem size="lg" width="80%"/>
        <div className="flex gap-2">
          <SkeletonItem size="xs" width={100}/>
          <SkeletonItem size="xs" width={80}/>
        </div>
        <div className="h-48 w-full">
          <SkeletonItem className="h-full"/>
        </div>
        <SkeletonItem/>
        <SkeletonItem/>
        <SkeletonItem width="90%"/>
        <SkeletonItem/>
        <SkeletonItem width="75%"/>
      </Skeleton>
    </div>
  ),
}
