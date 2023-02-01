import { useLayoutEffect, useRef } from 'react'
import { useDocument } from '../../../context'
import { usePortalsRefs } from '../context/page-portals'

const EMPTY_DEPS: any[] = []

export const useLayoutRef = (key: 'title' | 'navmenu') => {
  const ref = useRef<HTMLDivElement>(null)
  const doc = useDocument()
  const { setTitleELement, setNavElement } = usePortalsRefs()

  useLayoutEffect(() => {
    const $el = ref.current!

    Object.defineProperty($el, 'ownerDocument', { value: doc })

    switch (key) {
      case 'title':
        setTitleELement($el)

        break
      case 'navmenu':
        setNavElement($el)
    }

    return () => {
      switch (key) {
        case 'title':
          setTitleELement(null)

          break
        case 'navmenu':
          setNavElement(null)
      }
    }
  }, EMPTY_DEPS)

  return ref
}
