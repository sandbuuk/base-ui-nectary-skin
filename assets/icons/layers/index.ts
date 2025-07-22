import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLayers = createIconClass(templateHTML)
defineCustomElement('sinch-icon-layers', IconLayers)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-layers': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-layers': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-layers': TSinchIconReact,
    }
  }
}
