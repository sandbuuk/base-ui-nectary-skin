import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCloudDownload = createIconClass(templateHTML)
defineCustomElement('sinch-icon-cloud-download', IconCloudDownload)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-cloud-download': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cloud-download': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-cloud-download': TSinchIconReact,
    }
  }
}
