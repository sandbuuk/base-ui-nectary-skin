import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPlayForWork = createIconClass(templateHTML)
defineCustomElement('sinch-icon-play-for-work', IconPlayForWork)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-play-for-work': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-play-for-work': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-play-for-work': TSinchIconReact,
    }
  }
}
