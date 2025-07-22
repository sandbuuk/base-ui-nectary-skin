import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewComfy = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-comfy', IconViewComfy)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-comfy': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-comfy': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-comfy': TSinchIconReact,
    }
  }
}
