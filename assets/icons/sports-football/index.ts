import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSportsFootball = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sports-football', IconSportsFootball)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sports-football': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-football': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sports-football': TSinchIconReact,
    }
  }
}
