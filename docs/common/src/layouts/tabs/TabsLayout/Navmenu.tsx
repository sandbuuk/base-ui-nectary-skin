import { useLayoutRef } from '../hooks'
import type { FC } from 'react'
import '@nectary/components/title'

export const PageLayoutNavmenu: FC = () => {
  const ref = useLayoutRef('navmenu')

  return (
    <div id="navmenu" ref={ref}>
      <sinch-title type="m" level="3" text="Table of Contents" class="navmenu-title"/>
    </div>
  )
}
