import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsCell = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-cell', IconSettingsCell)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-cell': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-cell': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-cell': TSinchIconReact,
    }
  }
}
