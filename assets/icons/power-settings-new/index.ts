import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPowerSettingsNew = createIconClass(templateHTML)
defineCustomElement('sinch-icon-power-settings-new', IconPowerSettingsNew)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-power-settings-new': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-power-settings-new': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-power-settings-new': TSinchIconReact,
    }
  }
}
