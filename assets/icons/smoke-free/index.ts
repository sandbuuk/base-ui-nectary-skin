import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSmokeFree = createIconClass(templateHTML)
defineCustomElement('sinch-icon-smoke-free', IconSmokeFree)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-smoke-free': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-smoke-free': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-smoke-free': TSinchIconReact,
    }
  }
}
