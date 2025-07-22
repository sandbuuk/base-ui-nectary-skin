import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBikeScooter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-bike-scooter', IconBikeScooter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-bike-scooter': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bike-scooter': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-bike-scooter': TSinchIconReact,
    }
  }
}
