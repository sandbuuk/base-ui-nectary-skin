import { useCallback, useContext, useEffect, useState } from 'react'
import { UNSAFE_RouteContext } from 'react-router-dom'
import type { FC } from 'react'

type MFERenderFunc = (element: HTMLDivElement, x: {basePath: string}) => undefined | (() => void)
type LazyMFE = () => Promise<MFERenderFunc>
type Props = {
  config?: unknown,
  loadRender: LazyMFE,
}

// This will probably break some time in the future and needs to be fixed.
// Unfortunately 'react-router-dom' does not provide this feature natively.
const usePathPattern = () => useContext(UNSAFE_RouteContext).matches[0].route.path!

export const MFERoute: FC<Props> = ({ loadRender }) => {
  const pathPattern = usePathPattern()
  const [element, setElement] = useState<HTMLDivElement | null>(null)
  const [render, setRender] = useState<MFERenderFunc | null>(null)
  const setRef = useCallback((a: HTMLDivElement | null) => {
    if (a != null) {
      setElement(a)
    } else {
      setElement(null)
    }
  }, [])

  useEffect(() => {
    loadRender().then((x) => setRender(() => x)).catch(console.error)
  }, [])

  useEffect(() => {
    if ((render != null) && (element != null)) {
      return render(element, { basePath: pathPattern.slice(0, -2) })
    }
  }, [render, element])

  return <div key={pathPattern} ref={setRef}/>
}
