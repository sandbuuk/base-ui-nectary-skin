import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPermCameraMic = createIconClass(templateHTML)
defineCustomElement('sinch-icon-perm-camera-mic', IconPermCameraMic)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-perm-camera-mic': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-perm-camera-mic': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-perm-camera-mic': TSinchIconReact,
    }
  }
}
