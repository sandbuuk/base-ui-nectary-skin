import { createContext } from 'react'
import type { TOKEN_PAYLOAD } from '@sinch-engage/bus'
import type { RefObject } from 'react'

export const TokenContext = createContext<TOKEN_PAYLOAD>(null)
export const ModalContext = createContext<RefObject<Element>>({ current: null })
