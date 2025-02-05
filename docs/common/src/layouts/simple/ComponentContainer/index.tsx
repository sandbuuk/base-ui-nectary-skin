import './styles.css'
import type { FC, PropsWithChildren } from 'react'

export const ComponentContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id="page-container">
      {children}
    </div>
  )
}
