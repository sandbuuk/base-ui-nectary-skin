import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSwitchCamera = createIconClass(templateHTML)
defineCustomElement('sinch-icon-switch-camera', IconSwitchCamera)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-switch-camera': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-switch-camera': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-switch-camera': TSinchIconReact,
    }
  }
}
