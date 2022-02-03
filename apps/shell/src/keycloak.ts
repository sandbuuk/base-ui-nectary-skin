/**
 * This file handles the keycloak login state and exports an interface to interact with it.
 */
import EventEmitter from 'events' // TODO: This is a node module. Should we use something else?
import Keycloak from 'keycloak-js'
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
const keycloak = Keycloak(kcConfig);

(window as any).keycloak = keycloak // TODO: Remove

keycloak.init(kcInitOptions).catch(() => console.error('init failed'))

// Need to have some sort of event dispatching since the keycloak sdk only
// allows you to set one function for each event, but you might want to use the hook in multiple places.
const eventSource = new EventEmitter()

const handleEvent =
  (type: string) =>
    (...data: any[]) => {
      eventSource.emit(type, ...data)
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

eventSource.on('onAuthSuccess', () => {
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

eventSource.on('onAuthLogout', () => {
  if (interval !== null) {
    window.clearInterval(interval)
    interval = null
  }
})

export { eventSource }
export const login = keycloak.login.bind(keycloak)
export const logout = keycloak.logout.bind(keycloak)
export const getLoggedInState = () => keycloak.authenticated
export const getToken = () => (keycloak.authenticated === true ? {
  token: keycloak.token!,
  parsedToken: keycloak.tokenParsed!,
}
  : null)
