import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFlashOn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-flash-on', IconFlashOn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-flash-on': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flash-on': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-flash-on': TSinchIconReact,
    }
  }
}
