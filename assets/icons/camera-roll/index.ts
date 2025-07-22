import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCameraRoll = createIconClass(templateHTML)
defineCustomElement('sinch-icon-camera-roll', IconCameraRoll)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-camera-roll': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-camera-roll': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-camera-roll': TSinchIconReact,
    }
  }
}
