import { useEffect } from 'react'
import type { FC } from 'react'

export const withScrollIntoView = (Component: FC): FC => (props) => {
  useEffect(() => {
    if (location.hash !== '') {
      requestIdleCallback(() => {
        document
          .querySelector(location.hash)!
          .scrollIntoView({ block: 'nearest' })
      })
    }
  }, [])

  return (
    <Component {...props}/>
  )
}
