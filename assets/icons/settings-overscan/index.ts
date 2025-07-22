import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsOverscan = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-overscan', IconSettingsOverscan)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-overscan': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-overscan': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-overscan': TSinchIconReact,
    }
  }
}
