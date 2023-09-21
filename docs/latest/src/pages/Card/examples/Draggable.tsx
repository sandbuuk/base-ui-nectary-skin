import { useRef, useState } from 'react'
import type { TSinchCardElement } from '@nectary/components/card/types'
import type { CSSProperties, FC, SyntheticEvent } from 'react'
import '@nectary/components/card'
import '@nectary/assets/icons-branded/chatbot'

const columnStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  padding: '16px',
}

export const DraggableExample: FC = () => {
  const [items, setItems] = useState(() => ([{
    key: '1',
    caption: 'Card 1',
  }, {
    key: '2',
    caption: 'Card 2',
  }, {
    key: '3',
    caption: 'Card 3',
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
      style={columnStyle}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      {items.map(({ key, caption }) => (
        <sinch-card
          key={key}
          data-id={key}
          caption={caption}
          text="Lorem ipsum"
          draggable
        >
          <sinch-icon-branded-chatbot slot="icon"/>
        </sinch-card>
      ))}
    </div>
  )
}
