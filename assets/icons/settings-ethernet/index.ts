import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsEthernet = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-ethernet', IconSettingsEthernet)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-ethernet': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-ethernet': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-ethernet': TSinchIconReact,
    }
  }
}
