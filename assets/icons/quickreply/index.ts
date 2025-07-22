import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconQuickreply = createIconClass(templateHTML)
defineCustomElement('sinch-icon-quickreply', IconQuickreply)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-quickreply': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-quickreply': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-quickreply': TSinchIconReact,
    }
  }
}
