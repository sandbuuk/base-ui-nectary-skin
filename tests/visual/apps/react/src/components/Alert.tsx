import type { FC } from 'react'

type TAlert = {
}

export const Alert: FC<TAlert> = () => {
  return (
    <sinch-alert type="info" text="Alert text"></sinch-alert>
  )
}
