import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAlarmAdd = createIconClass(templateHTML)
defineCustomElement('sinch-icon-alarm-add', IconAlarmAdd)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-alarm-add': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-alarm-add': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-alarm-add': TSinchIconReact,
    }
  }
}
