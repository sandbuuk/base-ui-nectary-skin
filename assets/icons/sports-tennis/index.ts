import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSportsTennis = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sports-tennis', IconSportsTennis)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sports-tennis': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-tennis': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sports-tennis': TSinchIconReact,
    }
  }
}
