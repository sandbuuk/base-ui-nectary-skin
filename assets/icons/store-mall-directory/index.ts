import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStoreMallDirectory = createIconClass(templateHTML)
defineCustomElement('sinch-icon-store-mall-directory', IconStoreMallDirectory)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-store-mall-directory': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-store-mall-directory': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-store-mall-directory': TSinchIconReact,
    }
  }
}
