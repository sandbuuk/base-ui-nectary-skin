import { Navigate } from 'react-router-dom'
import type { FC } from 'react'
import { useNavigateLink } from '~/hooks'

export type TRedirectItem = {
  path: string,
}

export const RedirectItem: FC<TRedirectItem> = ({ path }) => {
  const { to } = useNavigateLink(path)

  return (
    <Navigate to={to} replace/>
  )
}
