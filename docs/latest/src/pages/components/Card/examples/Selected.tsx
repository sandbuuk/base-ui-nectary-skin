import React from 'react'
import type { FC } from 'react'
import '@nectary/components/card-v2'
import '@nectary/components/card-v2-title'
import '@nectary/components/text'

interface Card {
  id: number,
  title: string,
  content: string,
}

const CARDS_DATA: Card[] = [
  {
    id: 1,
    title: 'Click Me 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Click Me 2',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

export const SelectedExample: FC = () => {
  const [selectedCardId, setSelectedCardId] = React.useState(1)

  const handleSelect = (id: number) => {
    setSelectedCardId(id)
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', alignItems: 'start' }}>
      {CARDS_DATA.map((card) => (
        <sinch-card-v2 key={card.id} selected={card.id === selectedCardId} on-click={() => handleSelect(card.id)}>
          <sinch-card-v2-title slot="title" text={card.title}/>
          <sinch-text slot="content" type="m">{card.content}</sinch-text>
        </sinch-card-v2>
      ))}
    </div>
  )
}
