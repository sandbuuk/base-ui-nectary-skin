import { Pagination } from '@nectary/react'
import { useState } from 'react'
import type { FC } from 'react'

export const SimpleExample: FC = () => {
  const [value, setValue] = useState(5)

  return (
    <Pagination
      value={value}
      max={9}
      onChange={setValue}
    />
  )
}
