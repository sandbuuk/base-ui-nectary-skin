import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLayersClear = createIconClass(templateHTML)
defineCustomElement('sinch-icon-layers-clear', IconLayersClear)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-layers-clear': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-layers-clear': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-layers-clear': TSinchIconReact,
    }
  }
}
