import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDocument } from '../context'
import { composeSearchString, requestIdleCallback } from '../utils'

export const useNavigatePath = () => {
  const navigate = useNavigate()
  const doc = useDocument()

  return useCallback((pathname: string, search: string, hash: string = '') => {
    navigate({
      pathname: '/',
      search: composeSearchString(search, pathname),
      hash,
    })

    // If local navigation happened and hash is empty
    if (hash.length === 0) {
      // Scroll to top
      requestIdleCallback(() => {
        doc.getElementById('page-content')?.scroll(0, 0)
      })
    }
  }, [])
}
