import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-folder-shared', createIconClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-folder-shared': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-folder-shared': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-folder-shared': TSinchIconReact,
    }
  }
}
