import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFlashAuto = createIconClass(templateHTML)
defineCustomElement('sinch-icon-flash-auto', IconFlashAuto)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-flash-auto': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flash-auto': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-flash-auto': TSinchIconReact,
    }
  }
}
