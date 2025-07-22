import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddAlarm = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-alarm', IconAddAlarm)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-alarm': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-alarm': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-alarm': TSinchIconReact,
    }
  }
}
