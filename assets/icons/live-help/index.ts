import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLiveHelp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-live-help', IconLiveHelp)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-live-help': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-live-help': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-live-help': TSinchIconReact,
    }
  }
}
