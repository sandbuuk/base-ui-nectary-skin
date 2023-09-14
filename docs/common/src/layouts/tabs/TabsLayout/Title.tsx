import { useLocation } from 'react-router-dom'
import { useRouteTitleInfo } from '../context'
import type { FC } from 'react'
import '@nectary/components/title'

export const PageLayoutTitle: FC = () => {
  const { pathname } = useLocation()
  const { getRouteTitle } = useRouteTitleInfo()

  const title = getRouteTitle(pathname)

  if (title === null || title.length === 0) {
    return null
  }

  return (
    <sinch-title id="page-title" level="1" type="xl" text={title}/>
  )
}
