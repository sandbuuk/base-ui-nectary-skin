import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsBluetooth = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-bluetooth', IconSettingsBluetooth)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-bluetooth': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-bluetooth': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-bluetooth': TSinchIconReact,
    }
  }
}
