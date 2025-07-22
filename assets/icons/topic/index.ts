import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTopic = createIconClass(templateHTML)
defineCustomElement('sinch-icon-topic', IconTopic)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-topic': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-topic': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-topic': TSinchIconReact,
    }
  }
}
