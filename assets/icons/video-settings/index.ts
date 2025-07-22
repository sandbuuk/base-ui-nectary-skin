import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVideoSettings = createIconClass(templateHTML)
defineCustomElement('sinch-icon-video-settings', IconVideoSettings)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-video-settings': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-video-settings': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-video-settings': TSinchIconReact,
    }
  }
}
