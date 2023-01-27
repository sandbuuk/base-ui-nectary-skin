import { useState } from 'react'
import type { FC, PropsWithChildren } from 'react'
import './styles.css'
import '@sinch-engage/nectary/title'
import '@sinch-engage/nectary/icons/keyboard-arrow-down'

export type TNavigationGroup = PropsWithChildren & {
  text: string,
}

export const NavigationGroup: FC<TNavigationGroup> = ({ text, children }) => {
  const [isOpen, setOpen] = useState(true)
  const openClass = isOpen ? 'open' : ''

  return (
    <li className="navigation-group">
      <button
        className={`navigation-group-head ${openClass}`}
        onClick={() => setOpen(!isOpen)}
      >
        <sinch-title
          class="navigation-group-text"
          text={text}
          type="m"
          level="3"
          ellipsis
        />
        <sinch-icon-keyboard-arrow-down class="navigation-group-dropdown-icon"/>
      </button>
      <div className={isOpen ? '' : 'hidden'}>
        {children}
      </div>
    </li>
  )
}
