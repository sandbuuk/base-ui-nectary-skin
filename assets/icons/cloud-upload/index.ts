import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCloudUpload = createIconClass(templateHTML)
defineCustomElement('sinch-icon-cloud-upload', IconCloudUpload)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-cloud-upload': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cloud-upload': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-cloud-upload': TSinchIconReact,
    }
  }
}
