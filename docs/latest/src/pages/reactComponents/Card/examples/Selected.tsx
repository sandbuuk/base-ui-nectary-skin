import { Card, CardTitle, Text } from '@nectary/react'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'

interface CardData {
  id: number,
  title: string,
  content: string,
}

const CARDS_DATA: CardData[] = [
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

const wrapperStyles: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 10,
  alignItems: 'start',
}

export const SelectedExample: FC = () => {
  const [selectedCardId, setSelectedCardId] = useState(1)

  const handleSelect = (id: number) => {
    setSelectedCardId(id)
  }

  return (
    <div style={wrapperStyles}>
      {CARDS_DATA.map((card) => (
        <Card
          key={card.id}
          selected={card.id === selectedCardId}
          onClick={() => handleSelect(card.id)}
          title={<CardTitle text={card.title}/>}
          content={<Text type="m">{card.content}</Text>}
        />
      ))}
    </div>
  )
}
