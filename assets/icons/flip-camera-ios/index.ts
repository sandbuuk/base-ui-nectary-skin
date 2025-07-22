import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFlipCameraIos = createIconClass(templateHTML)
defineCustomElement('sinch-icon-flip-camera-ios', IconFlipCameraIos)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-flip-camera-ios': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flip-camera-ios': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-flip-camera-ios': TSinchIconReact,
    }
  }
}
