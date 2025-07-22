import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRvHookup = createIconClass(templateHTML)
defineCustomElement('sinch-icon-rv-hookup', IconRvHookup)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-rv-hookup': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rv-hookup': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-rv-hookup': TSinchIconReact,
    }
  }
}
