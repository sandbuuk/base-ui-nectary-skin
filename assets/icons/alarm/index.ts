import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAlarm = createIconClass(templateHTML)
defineCustomElement('sinch-icon-alarm', IconAlarm)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-alarm': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-alarm': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-alarm': TSinchIconReact,
    }
  }
}
