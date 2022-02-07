import { createContext } from 'react'
import type { TOKEN_PAYLOAD } from '@saas/bus'

export const TokenContext = createContext<TOKEN_PAYLOAD>(null)
