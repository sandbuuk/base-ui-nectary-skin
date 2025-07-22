import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDehaze = createIconClass(templateHTML)
defineCustomElement('sinch-icon-dehaze', IconDehaze)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-dehaze': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-dehaze': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-dehaze': TSinchIconReact,
    }
  }
}
