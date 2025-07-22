import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVideogameAsset = createIconClass(templateHTML)
defineCustomElement('sinch-icon-videogame-asset', IconVideogameAsset)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-videogame-asset': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-videogame-asset': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-videogame-asset': TSinchIconReact,
    }
  }
}
