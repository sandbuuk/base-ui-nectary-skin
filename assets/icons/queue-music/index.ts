import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconQueueMusic = createIconClass(templateHTML)
defineCustomElement('sinch-icon-queue-music', IconQueueMusic)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-queue-music': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-queue-music': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-queue-music': TSinchIconReact,
    }
  }
}
