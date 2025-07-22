import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPinDrop = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pin-drop', IconPinDrop)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pin-drop': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pin-drop': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pin-drop': TSinchIconReact,
    }
  }
}
