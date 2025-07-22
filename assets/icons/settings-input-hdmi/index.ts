import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsInputHdmi = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-input-hdmi', IconSettingsInputHdmi)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-input-hdmi': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-input-hdmi': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-input-hdmi': TSinchIconReact,
    }
  }
}
