import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBento = createIconClass(templateHTML)
defineCustomElement('sinch-icon-bento', IconBento)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-bento': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bento': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-bento': TSinchIconReact,
    }
  }
}
