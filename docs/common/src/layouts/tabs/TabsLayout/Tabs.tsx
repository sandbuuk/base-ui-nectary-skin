import { useLocation } from 'react-router-dom'
import { useNavigatePath } from '../../../hooks'
import { useRouteTabInfo } from '../context'
import type { FC } from 'react'
import '@sinch-engage/nectary/tabs'
import '@sinch-engage/nectary/tabs-option'

export const PageLayoutTabs: FC = () => {
  const navigate = useNavigatePath()
  const { pathname, search } = useLocation()
  const { getRouteTabInfo } = useRouteTabInfo()

  const tabs = getRouteTabInfo(pathname)

  if (tabs === null || tabs.length === 0) {
    return null
  }

  return (
    <sinch-tabs
      id="page-head-tabs"
      aria-label="Category tabs"
      value={pathname}
      on-change={(e) => {
        navigate(e.detail, search)
      }}
    >
      {tabs.map(({ value, text, route }) => (
        <sinch-tabs-option key={value} value={route} text={text} aria-label={text}/>
      ))}
    </sinch-tabs>
  )
}
