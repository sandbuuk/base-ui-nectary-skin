import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAdminPanelSettings = createIconClass(templateHTML)
defineCustomElement('sinch-icon-admin-panel-settings', IconAdminPanelSettings)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-admin-panel-settings': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-admin-panel-settings': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-admin-panel-settings': TSinchIconReact,
    }
  }
}
