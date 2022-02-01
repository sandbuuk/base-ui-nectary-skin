import type { Message } from '../common'

const TYPE = 'TOKEN'

export type TOKEN_PAYLOAD = null | {
  token: string,
  parsedToken: { /* to be extendend with whatever data we want to access in the token. */ }, }
export type TokenMessage = Message<typeof TYPE, TOKEN_PAYLOAD>

export const isTokenMessage = (m: Message<any, any>): m is TokenMessage => m?.type === TYPE
export const tokenMessage = (payload: TOKEN_PAYLOAD): TokenMessage => ({
  type: TYPE,
  payload,
})
