import './styles.css'
import type { FC, PropsWithChildren } from 'react'

export const ComponentTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <code id="page-container-title">
      {children}
    </code>
  )
}
