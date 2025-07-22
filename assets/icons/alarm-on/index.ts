import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAlarmOn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-alarm-on', IconAlarmOn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-alarm-on': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-alarm-on': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-alarm-on': TSinchIconReact,
    }
  }
}
