import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsPower = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-power', IconSettingsPower)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-power': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-power': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-power': TSinchIconReact,
    }
  }
}
