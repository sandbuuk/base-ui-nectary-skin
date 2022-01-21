/**
 * This file handles the keycloak login state and exports three hooks to manage it.
 * * useIsLoggedIn()
 *   Exposes a boolean
 * * useLogin()
 *   Exposes `login` and `logout` functions.
 * * useLoginToken()
 *   Exposes the token when logged in, otherwise `null`.
 */

import EventEmitter from 'events' // TODO: This is a node module. Should we use something else?
import Keycloak from 'keycloak-js'
import React from 'react'
import type { KeycloakConfig, KeycloakInitOptions } from 'keycloak-js'

// Min validity should preferably be smaller than refresh interval.
// Otherwise the token might expire while we are waiting to check.
const refreshIntervalS = 10
const minValidityTimeS = 15

const kcConfig: KeycloakConfig = {
  url: `https://auth.dev.chatlayer.ai/auth`,
  realm: 'Chatlayer',
  clientId: 'sinch-engage',
}

const kcInitOptions: KeycloakInitOptions = {
  onLoad: 'check-sso',
  pkceMethod: 'S256',
  silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
}

// This should be a singleton as far as I can tell. Initializing outside of the hook.
const keycloak = Keycloak(kcConfig)

keycloak.init(kcInitOptions).catch(() => console.error('init failed'))

// Need to have some sort of event dispatching since the keycloak sdk only
// allows you to set one function for each event, but you might want to use the hook in multiple places.
const emitter = new EventEmitter()

const handleEvent =
  (type: string) =>
    (...data: any[]) => {
      emitter.emit(type, ...data)
      console.log('keycloak:', type, ...data) // TODO: Remove
    }

// Setup the emitter, from now on, use the emitter to access these events.
keycloak.onActionUpdate = handleEvent('onActionUpdate')
keycloak.onAuthSuccess = handleEvent('onAuthSuccess')
keycloak.onAuthError = handleEvent('onAuthError')
keycloak.onAuthRefreshSuccess = handleEvent('onAuthRefreshSuccess')
keycloak.onAuthRefreshError = handleEvent('onAuthRefreshError')
keycloak.onAuthLogout = handleEvent('onAuthLogout')
keycloak.onTokenExpired = handleEvent('onTokenExpired')

// Not happy wih this super imperative code.. any ideas? Are we allowed to use some FRP lib? :)
let interval: number | null = null

emitter.on('onAuthSuccess', () => {
  if (interval === null) {
    interval = window.setInterval(() => {
      keycloak
        .updateToken(minValidityTimeS)
        .then((refreshed) => {
          console.log(
            refreshed
              ? 'successsfully refreshed token'
              : 'no need to refresh token'
          )
        })
        .catch(() => {
          console.log('failed to refresh token')
        })
    }, refreshIntervalS * 1000)
  }
})

emitter.on('onAuthLogout', () => {
  if (interval !== null) {
    window.clearInterval(interval)
    interval = null
  }
})

const getLoggedInState = () => keycloak.authenticated

/**
 * Returns a boolean with the current login state or undefined if not yet known.
 */
export const useIsLoggedIn = () => {
  const [isLoggedIn, dispatch] = React.useReducer(getLoggedInState, undefined, getLoggedInState)

  React.useEffect(() => {
    // logged in
    emitter.on('onAuthSuccess', dispatch)
    emitter.on('onAuthRefreshSuccess', dispatch)
    // logged out
    emitter.on('onAuthError', dispatch)
    emitter.on('onAuthRefreshError', dispatch)
    emitter.on('onAuthLogout', dispatch)
    emitter.on('onTokenExpired', dispatch)

    return () => {
      emitter.off('onAuthSuccess', dispatch)
      emitter.off('onAuthRefreshSuccess', dispatch)
      emitter.off('onAuthError', dispatch)
      emitter.off('onAuthRefreshError', dispatch)
      emitter.off('onAuthLogout', dispatch)
      emitter.off('onTokenExpired', dispatch)
    }
  }, [])

  return isLoggedIn
}
/**
 * @returns Object with self explanatory functions, login, logout.
 */
export const useLogin = () =>
  React.useMemo(() => ({
    login: keycloak.login.bind(keycloak),
    logout: keycloak.logout.bind(keycloak),
  }), [])

/**
 * @returns The base64 encoded token if logged in, otherwise `null`.
 */
export const useLoginToken = () => {
  const isLoggedIn = useIsLoggedIn()

  if (!(isLoggedIn ?? false)) {
    return null
  }

  return keycloak.token
}
