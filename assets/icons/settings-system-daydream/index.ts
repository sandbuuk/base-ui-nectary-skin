import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsSystemDaydream = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-system-daydream', IconSettingsSystemDaydream)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-system-daydream': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-system-daydream': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-system-daydream': TSinchIconReact,
    }
  }
}
