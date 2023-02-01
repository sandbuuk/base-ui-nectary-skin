import { useLayoutRef } from '../hooks'
import type { FC } from 'react'

export const PageLayoutTitle: FC = () => {
  const ref = useLayoutRef('title')

  return (
    <div id="page-title" ref={ref}/>
  )
}
