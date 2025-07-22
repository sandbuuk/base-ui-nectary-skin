import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCancelScheduleSend = createIconClass(templateHTML)
defineCustomElement('sinch-icon-cancel-schedule-send', IconCancelScheduleSend)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-cancel-schedule-send': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cancel-schedule-send': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-cancel-schedule-send': TSinchIconReact,
    }
  }
}
