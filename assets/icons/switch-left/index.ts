import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSwitchLeft = createIconClass(templateHTML)
defineCustomElement('sinch-icon-switch-left', IconSwitchLeft)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-switch-left': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-switch-left': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-switch-left': TSinchIconReact,
    }
  }
}
