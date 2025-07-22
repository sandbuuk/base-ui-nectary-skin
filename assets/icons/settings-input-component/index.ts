import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsInputComponent = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-input-component', IconSettingsInputComponent)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-input-component': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-input-component': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-input-component': TSinchIconReact,
    }
  }
}
