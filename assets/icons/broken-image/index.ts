import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBrokenImage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-broken-image', IconBrokenImage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-broken-image': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-broken-image': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-broken-image': TSinchIconReact,
    }
  }
}
