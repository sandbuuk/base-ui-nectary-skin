import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBedtime = createIconClass(templateHTML)
defineCustomElement('sinch-icon-bedtime', IconBedtime)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-bedtime': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bedtime': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-bedtime': TSinchIconReact,
    }
  }
}
