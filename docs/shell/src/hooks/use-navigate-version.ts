import { composeSearchString, requestIdleCallback } from 'docs-common'
import { useCallback, useMemo, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { latestVersion, versionKeys, VERSION_KEY } from '~/utils'

type TNavigateVersionResult = {
  versionValue: string,
  setVersionValue: (version: string) => void,
}

const NO_DEPS: string[] = []

export const useNavigateVersion = (): TNavigateVersionResult => {
  const navigate = useNavigate()
  const location = useLocation()
  const locationRef = useRef(location)

  locationRef.current = location

  const setVersionValue = useCallback((version: string) => {
    const { search, hash } = locationRef.current
    const params = new URLSearchParams(search)

    params.set(VERSION_KEY, version)

    navigate({
      pathname: '/',
      search: composeSearchString(params, '/'),
      hash,
    })
  }, NO_DEPS)

  const urlVersionValue = useMemo(
    () => new URLSearchParams(location.search).get(VERSION_KEY),
    [location.search]
  )

  const versionValue = useMemo(() => {
    if (urlVersionValue === null || versionKeys.includes(urlVersionValue) === false) {
      requestIdleCallback(() => {
        setVersionValue(latestVersion)
      })

      return latestVersion
    }

    return urlVersionValue
  }, [urlVersionValue])

  return {
    versionValue,
    setVersionValue,
  }
}
