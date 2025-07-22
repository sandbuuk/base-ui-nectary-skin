import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVignette = createIconClass(templateHTML)
defineCustomElement('sinch-icon-vignette', IconVignette)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-vignette': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-vignette': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-vignette': TSinchIconReact,
    }
  }
}
