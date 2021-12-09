import { useEffect } from 'react'
import './Quickstarts.css'

export const Quickstarts = () => {
  useEffect(() => {
    import('Quickstarts/Container').catch(console.error)
  }, [])

  return (
    <sinch-quickstarts-app/>
  )
}
