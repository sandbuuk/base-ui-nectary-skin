import { composeSearchString } from 'docs-common'
import { useMemo, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import type { Path } from 'react-router-dom'
import { areSupportedParamsEqual, filterSupportedParams } from '~/utils'

type TNavigatePathResult = {
  to: Path,
  isActive: boolean,
}

export const useNavigateLink = (path: string): TNavigatePathResult => {
  const location = useLocation()
  const prevParamsRef = useRef<URLSearchParams | null>(null)

  const params = useMemo(() => {
    const nextParams = filterSupportedParams(location.search)

    if (areSupportedParamsEqual(nextParams, prevParamsRef.current) === false) {
      prevParamsRef.current = nextParams
    }

    return prevParamsRef.current ?? new URLSearchParams()
  }, [location.search])

  const to: Path = useMemo(() => {
    return {
      pathname: '/',
      search: composeSearchString(params, path),
      hash: '',
    }
  }, [params, path])

  return {
    to,
    isActive: location.pathname === path,
  }
}
