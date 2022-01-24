import { useEffect } from 'react'
import { useLoginToken } from '../hooks/useLogin'
import type { FC } from 'react'
import './Quickstarts.css'

export const Quickstarts: FC = () => {
  const token = useLoginToken()

  useEffect(() => {
    import('Quickstarts/Container').catch(console.error)
  }, [])

  return <sinch-quickstarts-app token={token}/>
}
