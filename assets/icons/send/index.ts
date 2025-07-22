import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSend = createIconClass(templateHTML)
defineCustomElement('sinch-icon-send', IconSend)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-send': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-send': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-send': TSinchIconReact,
    }
  }
}
