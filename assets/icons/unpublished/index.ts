import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconUnpublished = createIconClass(templateHTML)
defineCustomElement('sinch-icon-unpublished', IconUnpublished)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-unpublished': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-unpublished': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-unpublished': TSinchIconReact,
    }
  }
}
