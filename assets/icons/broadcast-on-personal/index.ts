import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBroadcastOnPersonal = createIconClass(templateHTML)
defineCustomElement('sinch-icon-broadcast-on-personal', IconBroadcastOnPersonal)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-broadcast-on-personal': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-broadcast-on-personal': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-broadcast-on-personal': TSinchIconReact,
    }
  }
}
