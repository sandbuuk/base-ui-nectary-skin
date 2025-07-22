import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSurroundSound = createIconClass(templateHTML)
defineCustomElement('sinch-icon-surround-sound', IconSurroundSound)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-surround-sound': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-surround-sound': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-surround-sound': TSinchIconReact,
    }
  }
}
