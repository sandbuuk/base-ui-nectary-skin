import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGroups = createIconClass(templateHTML)
defineCustomElement('sinch-icon-groups', IconGroups)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-groups': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-groups': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-groups': TSinchIconReact,
    }
  }
}
