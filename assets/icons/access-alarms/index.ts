import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAccessAlarms = createIconClass(templateHTML)
defineCustomElement('sinch-icon-access-alarms', IconAccessAlarms)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-access-alarms': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-access-alarms': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-access-alarms': TSinchIconReact,
    }
  }
}
