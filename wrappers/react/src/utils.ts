import { createElement } from 'react'
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

  return createElement('div', props, node)
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
    // SAFETY: Object.keys in TS returns string[], which destorys type infrormation about the keys. They are still keyof Slots<T>
    results.push(fn(k, slots[k as keyof Slots<T>]))
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

  if (slots == undefined) {
    return null
  }

  const renderedSlots = mapSlots(slots, renderSlot)

  if (renderedSlots.length === 0) {
    return null
  } else if (renderedSlots.length === 1) {
    return renderedSlots[0]
  }

  return renderedSlots
}

function camelToKebab(camelCase: string) {
  return camelCase
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase()
}

function propsToAttributes<P extends {}>(props: P) {
  return Object.fromEntries(Object.entries(props).map(([key, value]) => [camelToKebab(key), value]))
}

export function createReactWrapper<OtherProps extends {}, T extends string>(
  element: string
): React.FC<WrapperProps<T> & OtherProps> {
  return ({ slots, children, ...otherProps }: WrapperProps<T> & OtherProps) =>
    createElement(
      element,
      propsToAttributes(otherProps),
      renderSlotsOrChildren<T>(children, slots)
    )
}
