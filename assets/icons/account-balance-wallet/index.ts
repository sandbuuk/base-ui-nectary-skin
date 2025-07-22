import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAccountBalanceWallet = createIconClass(templateHTML)
defineCustomElement('sinch-icon-account-balance-wallet', IconAccountBalanceWallet)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-account-balance-wallet': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-account-balance-wallet': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-account-balance-wallet': TSinchIconReact,
    }
  }
}
