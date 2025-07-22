import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAccessAlarm = createIconClass(templateHTML)
defineCustomElement('sinch-icon-access-alarm', IconAccessAlarm)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-access-alarm': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-access-alarm': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-access-alarm': TSinchIconReact,
    }
  }
}
