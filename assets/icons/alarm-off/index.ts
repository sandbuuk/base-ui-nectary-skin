import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAlarmOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-alarm-off', IconAlarmOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-alarm-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-alarm-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-alarm-off': TSinchIconReact,
    }
  }
}
