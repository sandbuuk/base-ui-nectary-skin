import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsPhone = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-phone', IconSettingsPhone)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-phone': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-phone': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-phone': TSinchIconReact,
    }
  }
}
