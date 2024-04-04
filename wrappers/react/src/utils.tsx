import React from 'react'
import type { ReactNode } from 'react'

type Slots<Keys extends string> = {
  [k in Keys]: React.ReactNode;
}

export type WrapperProps<T extends string> = {
  children?: React.ReactNode,
  slots?: Slots<T>,
}

function renderSlot(slotName: string, node: ReactNode) {
  const props = {
    key: slotName,
    slot: slotName,
    style: {
      display: 'contents',
    },
  }

  return React.createElement('div', props, node)
}

function mapSlots<T extends string>(
  slots: Slots<T>,
  fn: (slotName: string, node: ReactNode) => ReactNode
): ReactNode[] {
  const results: ReactNode[] = []

  if (slots == null) {
    return []
  }

  for (const k of Object.keys(slots)) {
    results.push(fn(k, slots[k]))
  }

  return results
}

function renderSlotsOrChildren<T extends string>(
  children: ReactNode | undefined,
  slots: Slots<T> | undefined
): React.ReactNode {
  if (children != null) {
    return children
  }

  const renderedSlots = mapSlots(slots, renderSlot)

  if (renderedSlots.length === 0) {
    return null
  } else if (renderedSlots.length === 1) {
    return renderedSlots[0]
  }

  return renderedSlots
}

export function createReactWrapper<T extends string>(
  element: string
): React.FC<WrapperProps<T>> {
  return ({ slots, children, ...others }: WrapperProps<T>) =>
    React.createElement(
      element,
      others,
      renderSlotsOrChildren<T>(children, slots)
    )
}
