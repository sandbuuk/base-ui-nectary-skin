import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLeaderboard = createIconClass(templateHTML)
defineCustomElement('sinch-icon-leaderboard', IconLeaderboard)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-leaderboard': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-leaderboard': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-leaderboard': TSinchIconReact,
    }
  }
}
