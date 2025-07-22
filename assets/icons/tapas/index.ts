import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTapas = createIconClass(templateHTML)
defineCustomElement('sinch-icon-tapas', IconTapas)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-tapas': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tapas': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-tapas': TSinchIconReact,
    }
  }
}
