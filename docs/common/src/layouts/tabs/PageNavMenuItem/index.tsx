import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import { usePortalNavmenu } from '../context/page-portals'
import type { FC } from 'react'
import './styles.css'

type TPageNavMenuItem = {
  href: string,
  level: number,
  text: string,
}

export const PageNavMenuItem: FC<TPageNavMenuItem> = ({ level, href, text }) => {
  const { hash } = useLocation()
  const $el = usePortalNavmenu()

  if ($el === null) {
    return null
  }

  const isActive = href === hash

  return createPortal(
    <a
      href={href}
      className={`navmenu-link level-${level} ${isActive ? 'active' : ''}`}
    >
      {text}
    </a>,
    $el
  )
}
