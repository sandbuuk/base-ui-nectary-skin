import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsInputAntenna = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-input-antenna', IconSettingsInputAntenna)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-input-antenna': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-input-antenna': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-input-antenna': TSinchIconReact,
    }
  }
}
