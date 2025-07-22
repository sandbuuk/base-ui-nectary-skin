import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLabelOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-label-outline', IconLabelOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-label-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-label-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-label-outline': TSinchIconReact,
    }
  }
}
