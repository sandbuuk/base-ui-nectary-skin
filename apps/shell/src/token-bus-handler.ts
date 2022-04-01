import { listenToBus, sendMessageOnBus, tokenMessage, isTokenRequestMessage, filterMessage } from '@sinch-engage/bus'
import * as keycloak from './keycloak'

// Respond with most current token on Token Requests™.
// This will have issues with multiple tabs and windows for the same page but will due for now.
const unsub = listenToBus(filterMessage(isTokenRequestMessage)(() => {
  sendMessageOnBus(tokenMessage(keycloak.getToken()))
}))

window.addEventListener('unload', unsub) // guess not needed actually

// Send token changes as soon as they happen..
let token = keycloak.getToken()
const updateToken = () => {
  const newishToken = keycloak.getToken()

  if (newishToken?.token !== token?.token) {
    token = newishToken
    sendMessageOnBus(tokenMessage(token))
  }
}

keycloak.eventSource.on('onAuthSuccess', updateToken)
keycloak.eventSource.on('onAuthRefreshSuccess', updateToken)
keycloak.eventSource.on('onAuthError', updateToken)
keycloak.eventSource.on('onAuthRefreshError', updateToken)
keycloak.eventSource.on('onAuthLogout', updateToken)
keycloak.eventSource.on('onTokenExpired', updateToken)

// not really needed in this solution but good to have for future refactors
window.addEventListener('unload', () => {
  keycloak.eventSource.off('onAuthSuccess', updateToken)
  keycloak.eventSource.off('onAuthRefreshSuccess', updateToken)
  keycloak.eventSource.off('onAuthError', updateToken)
  keycloak.eventSource.off('onAuthRefreshError', updateToken)
  keycloak.eventSource.off('onAuthLogout', updateToken)
  keycloak.eventSource.off('onTokenExpired', updateToken)
})
