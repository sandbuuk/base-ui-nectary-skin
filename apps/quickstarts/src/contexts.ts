import { createContext } from 'react'
import type { TOKEN_PAYLOAD } from '@sinch/bus'

export const TokenContext = createContext<TOKEN_PAYLOAD>(null)
