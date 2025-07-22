import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCloudOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-cloud-off', IconCloudOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-cloud-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cloud-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-cloud-off': TSinchIconReact,
    }
  }
}
