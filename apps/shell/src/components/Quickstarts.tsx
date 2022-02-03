import { useEffect } from 'react'
import type { FC } from 'react'
import './Quickstarts.css'

export const Quickstarts: FC = () => {
  useEffect(() => {
    import('Quickstarts/Container').catch(console.error)
  }, [])

  return <sinch-quickstarts-app/>
}
