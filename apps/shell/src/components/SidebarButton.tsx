import { createElement } from 'react'
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import styles from './SidebarButton.module.css'
import type { FC } from 'react'

type TSidebarButton = {
  to: string,
  text: string,
  tooltip: string,
  icon: string,
}

export const SidebarButton: FC<TSidebarButton> = ({ text, tooltip, icon, to }) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: to === '/' })
  const nav = useNavigate()

  const iconEl = createElement(icon, {
    size: 32,
    inverted: match !== null,
  })

  return (
    <button
      className={`${styles.sidebarButton} ${match !== null ? styles.active : ''}`}
      onClick={() => nav(to)}
    >
      <sinch-tooltip text={tooltip} inverted orientation="right">
        <div className={styles.iconWrapper}>
          {iconEl}
        </div>
      </sinch-tooltip>
      <span>{text}</span>
    </button>
  )
}
