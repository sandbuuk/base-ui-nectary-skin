import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTabletAndroid = createIconClass(templateHTML)
defineCustomElement('sinch-icon-tablet-android', IconTabletAndroid)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-tablet-android': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tablet-android': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-tablet-android': TSinchIconReact,
    }
  }
}
