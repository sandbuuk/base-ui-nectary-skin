import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTrain = createIconClass(templateHTML)
defineCustomElement('sinch-icon-train', IconTrain)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-train': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-train': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-train': TSinchIconReact,
    }
  }
}
