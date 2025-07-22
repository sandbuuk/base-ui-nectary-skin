import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSnooze = createIconClass(templateHTML)
defineCustomElement('sinch-icon-snooze', IconSnooze)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-snooze': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-snooze': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-snooze': TSinchIconReact,
    }
  }
}
