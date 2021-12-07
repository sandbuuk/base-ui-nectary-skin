import { useEffect } from 'react'

export const Quickstarts = () => {
  useEffect(() => {
    import('Quickstarts/Container').catch(console.error)
  }, [])

  return (
    <sinch-quickstarts-app/>
  )
}
