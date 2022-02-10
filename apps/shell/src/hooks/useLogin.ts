import {
  useReducer,
  useEffect,
  useMemo,
} from 'react'
import { getLoggedInState, getToken, eventSource, login, logout } from '../keycloak'

/**
 * Returns a boolean with the current login state or undefined if not yet known.
 */
export const useIsLoggedIn = () => {
  const [isLoggedIn, dispatch] = useReducer(getLoggedInState, undefined, getLoggedInState)

  useEffect(() => {
    // logged in
    eventSource.on('onAuthSuccess', dispatch)
    eventSource.on('onAuthRefreshSuccess', dispatch)
    // logged out
    eventSource.on('onAuthError', dispatch)
    eventSource.on('onAuthRefreshError', dispatch)
    eventSource.on('onAuthLogout', dispatch)
    eventSource.on('onTokenExpired', dispatch)

    return () => {
      eventSource.off('onAuthSuccess', dispatch)
      eventSource.off('onAuthRefreshSuccess', dispatch)
      eventSource.off('onAuthError', dispatch)
      eventSource.off('onAuthRefreshError', dispatch)
      eventSource.off('onAuthLogout', dispatch)
      eventSource.off('onTokenExpired', dispatch)
    }
  }, [])

  return isLoggedIn
}
/**
 * @returns Object with self explanatory functions, login, logout.
 */
export const useLogin = () => ({ login, logout })

/**
 * @returns The base64 encoded token if logged in, otherwise `null`.
 */
export const useLoginToken = () => {
  const [token, dispatch] = useReducer(getToken, undefined, getToken)
  const memoToken = useMemo(() => token, [token?.token])

  useEffect(() => {
    // logged in
    eventSource.on('onAuthSuccess', dispatch)
    eventSource.on('onAuthRefreshSuccess', dispatch)
    // logged out
    eventSource.on('onAuthError', dispatch)
    eventSource.on('onAuthRefreshError', dispatch)
    eventSource.on('onAuthLogout', dispatch)
    eventSource.on('onTokenExpired', dispatch)

    return () => {
      eventSource.off('onAuthSuccess', dispatch)
      eventSource.off('onAuthRefreshSuccess', dispatch)
      eventSource.off('onAuthError', dispatch)
      eventSource.off('onAuthRefreshError', dispatch)
      eventSource.off('onAuthLogout', dispatch)
      eventSource.off('onTokenExpired', dispatch)
    }
  }, [])

  return memoToken
}

export const useOnTokenChange = (callback: (token: ReturnType<typeof useLoginToken>) => void) => {
  const token = useLoginToken()

  useEffect(() => {
    callback(token)
  }, [token]) // `token` is memoized so should not cause unneccessary rerenders.
}
