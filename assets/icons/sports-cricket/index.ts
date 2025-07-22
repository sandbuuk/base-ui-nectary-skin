import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSportsCricket = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sports-cricket', IconSportsCricket)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sports-cricket': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-cricket': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sports-cricket': TSinchIconReact,
    }
  }
}
