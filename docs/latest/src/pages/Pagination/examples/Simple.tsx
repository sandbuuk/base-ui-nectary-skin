import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/pagination'

export const SimpleExample: FC = () => {
  const [value, setValue] = useState(5)
  const onChange = (e: CustomEvent<number>) => {
    setValue(e.detail)
  }

  return (
    <sinch-pagination
      value={value}
      on-change={onChange}
      max={9}
    />
  )
}
