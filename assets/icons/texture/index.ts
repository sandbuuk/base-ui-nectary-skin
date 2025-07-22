import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTexture = createIconClass(templateHTML)
defineCustomElement('sinch-icon-texture', IconTexture)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-texture': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-texture': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-texture': TSinchIconReact,
    }
  }
}
