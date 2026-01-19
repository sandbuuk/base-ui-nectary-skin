import { useState, useEffect, useCallback } from 'react'
import { LAYOUT_STORAGE_KEY } from '../config/constants'

export type LayoutType = 'vertical' | 'horizontal'

export const usePlaygroundLayout = () => {
  const [layout, setLayout] = useState<LayoutType>(() => {
    const saved = localStorage.getItem(LAYOUT_STORAGE_KEY)

    return saved === 'horizontal' ? 'horizontal' : 'vertical'
  })

  // Persist layout preference
  useEffect(() => {
    localStorage.setItem(LAYOUT_STORAGE_KEY, layout)
  }, [layout])

  const toggleLayout = useCallback(() => {
    setLayout((l) => (l === 'vertical' ? 'horizontal' : 'vertical'))
  }, [])

  return { layout, toggleLayout }
}
