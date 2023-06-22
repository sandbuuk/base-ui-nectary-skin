import { useLayoutEffect, useRef } from 'react'
import { useDocument } from '../../../context'
import { usePortalSetters } from '../context/page-portals'

const EMPTY_DEPS: any[] = []

export const useLayoutRef = (key: 'navmenu') => {
  const ref = useRef<HTMLDivElement>(null)
  const doc = useDocument()
  const { setNavElement } = usePortalSetters()

  useLayoutEffect(() => {
    const $el = ref.current!

    Object.defineProperty($el, 'ownerDocument', { value: doc })

    switch (key) {
      case 'navmenu':
        setNavElement($el)
    }

    return () => {
      switch (key) {
        case 'navmenu':
          setNavElement(null)
      }
    }
  }, EMPTY_DEPS)

  return ref
}
