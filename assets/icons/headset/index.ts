import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHeadset = createIconClass(templateHTML)
defineCustomElement('sinch-icon-headset', IconHeadset)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-headset': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-headset': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-headset': TSinchIconReact,
    }
  }
}
