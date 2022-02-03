import type { Message } from '../common'

const TYPE = 'TOKEN_REQUEST'
type PAYLOAD = null
type TokenRequestMessage = Message<typeof TYPE, PAYLOAD>

export const isTokenRequestMessage = (m: Message<any, any>): m is TokenRequestMessage => m?.type === TYPE
export const tokenRequestMessage = (): TokenRequestMessage => ({
  type: TYPE,
  payload: null,
})
