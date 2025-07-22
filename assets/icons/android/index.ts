import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAndroid = createIconClass(templateHTML)
defineCustomElement('sinch-icon-android', IconAndroid)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-android': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-android': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-android': TSinchIconReact,
    }
  }
}
