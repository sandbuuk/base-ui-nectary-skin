import { useRef, useState } from 'react'
import type { TSinchCardElement } from '@nectary/components/card/types'
import type { CSSProperties, FC, SyntheticEvent } from 'react'
import '@nectary/components/card'

const columnStyle: CSSProperties = {
  display: 'flex',
  gap: '8px',
}

type TCard = {
  search: URLSearchParams,
}

export const CardDnD: FC<TCard> = () => {
  const [items, setItems] = useState(() => ([{
    key: '1',
    caption: 'Card 1',
    draggable: true,
  }, {
    key: '2',
    caption: 'Card 2',
    draggable: true,
  }, {
    key: '3',
    caption: 'Card 3',
    draggable: false,
  }]))
  const dragTargetRef = useRef<TSinchCardElement | null>(null)
  const dragOverTargetRef = useRef<TSinchCardElement | null>(null)

  const onDragStart = (e: SyntheticEvent) => {
    if ((e.target as Element).matches('sinch-card')) {
      dragTargetRef.current = e.target as TSinchCardElement
      dragTargetRef.current.style.setProperty('opacity', '0.3')
    }
  }

  const onDragEnd = () => {
    dragTargetRef.current!.style.removeProperty('opacity')
    dragTargetRef.current = null
    dragOverTargetRef.current = null
  }

  const onDragOver = (e: SyntheticEvent) => {
    e.preventDefault()

    if (e.target === dragOverTargetRef.current ||
      !(e.target as Element).matches('sinch-card')) {
      return
    }

    dragOverTargetRef.current = e.target as TSinchCardElement

    if (dragOverTargetRef.current === dragTargetRef.current) {
      return
    }

    const dragKey = dragTargetRef.current!.getAttribute('data-id')
    const dragOverKey = dragOverTargetRef.current!.getAttribute('data-id')
    const dragIndex = items.findIndex((item) => item.key === dragKey)
    const dragOverIndex = items.findIndex((item) => item.key === dragOverKey)
    const nextItems = items.slice()

    nextItems.splice(dragIndex, 1)
    nextItems.splice(dragOverIndex, 0, items[dragIndex])

    setItems(nextItems)
  }

  return (
    <div
      id="dnd-wrapper"
      style={columnStyle}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      {items.map(({ key, caption, draggable }) => (
        <sinch-card
          key={key}
          data-id={key}
          caption={caption}
          text="Lorem ipsum"
          label="Label"
          draggable={draggable}
        />
      ))}
    </div>
  )
}
