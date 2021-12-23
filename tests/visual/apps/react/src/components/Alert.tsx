import type { FC } from 'react'

type TAlert = {
  width?: number,
}

export const Alert: FC<TAlert> = ({ width }) => {
  const style = {
    width: width != null ? `${width}px` : 'unset',
  }

  return (
    <sinch-alert style={style} type="info" text="Alert text"></sinch-alert>
  )
}
