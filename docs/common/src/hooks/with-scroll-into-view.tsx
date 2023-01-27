import { useEffect } from 'react'
import { useDocument } from '../context'
import { requestIdleCallback } from '../utils'
import type { FC } from 'react'

export const withScrollIntoView = (Component: FC): FC => (props) => {
  const doc = useDocument()

  useEffect(() => {
    const hash = location.hash

    if (hash !== '') {
      return requestIdleCallback(() => {
        doc.querySelector(hash)?.scrollIntoView()
      })
    }
  }, [])

  return (
    <Component {...props}/>
  )
}
