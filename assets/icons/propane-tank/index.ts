import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPropaneTank = createIconClass(templateHTML)
defineCustomElement('sinch-icon-propane-tank', IconPropaneTank)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-propane-tank': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-propane-tank': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-propane-tank': TSinchIconReact,
    }
  }
}
