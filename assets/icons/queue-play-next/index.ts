import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconQueuePlayNext = createIconClass(templateHTML)
defineCustomElement('sinch-icon-queue-play-next', IconQueuePlayNext)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-queue-play-next': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-queue-play-next': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-queue-play-next': TSinchIconReact,
    }
  }
}
