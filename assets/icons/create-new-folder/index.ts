import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCreateNewFolder = createIconClass(templateHTML)
defineCustomElement('sinch-icon-create-new-folder', IconCreateNewFolder)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-create-new-folder': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-create-new-folder': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-create-new-folder': TSinchIconReact,
    }
  }
}
