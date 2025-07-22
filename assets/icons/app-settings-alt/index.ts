import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAppSettingsAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-app-settings-alt', IconAppSettingsAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-app-settings-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-app-settings-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-app-settings-alt': TSinchIconReact,
    }
  }
}
