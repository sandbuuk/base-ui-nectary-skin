import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCloudQueue = createIconClass(templateHTML)
defineCustomElement('sinch-icon-cloud-queue', IconCloudQueue)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-cloud-queue': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cloud-queue': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-cloud-queue': TSinchIconReact,
    }
  }
}
