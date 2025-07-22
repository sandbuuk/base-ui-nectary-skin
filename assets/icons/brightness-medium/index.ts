import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBrightnessMedium = createIconClass(templateHTML)
defineCustomElement('sinch-icon-brightness-medium', IconBrightnessMedium)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-brightness-medium': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-brightness-medium': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-brightness-medium': TSinchIconReact,
    }
  }
}
