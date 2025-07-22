import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBroadcastOnHome = createIconClass(templateHTML)
defineCustomElement('sinch-icon-broadcast-on-home', IconBroadcastOnHome)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-broadcast-on-home': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-broadcast-on-home': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-broadcast-on-home': TSinchIconReact,
    }
  }
}
