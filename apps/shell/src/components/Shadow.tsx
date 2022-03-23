import { useCallback, useEffect, useState } from 'react'
import type { FC } from 'react'

type MFERenderFunc = (element: ShadowRoot | HTMLElement) => undefined | (() => void)
type LazyMFE = () => Promise<MFERenderFunc>

export const Shadow: FC<{loadRender: LazyMFE}> = ({ loadRender }) => {
  const [shadow, setShadow] = useState<ShadowRoot | null>(null)
  const [render, setRender] = useState<MFERenderFunc | null>(null)
  const setRef = useCallback((a: HTMLDivElement | null) => {
    if (a != null) {
      setShadow(a.shadowRoot ?? a.attachShadow({ mode: 'open' }))
    } else {
      setShadow(null)
    }
  }, [])

  useEffect(() => {
    loadRender().then((x) => setRender(() => x)).catch(console.error)
  }, [])

  useEffect(() => {
    if ((render != null) && (shadow != null)) {
      return render(shadow)
    }
  }, [render, shadow])

  return (
    <div ref={setRef}/>
  )
}
