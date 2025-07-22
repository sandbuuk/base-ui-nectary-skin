import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPlayCircleOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-play-circle-outline', IconPlayCircleOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-play-circle-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-play-circle-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-play-circle-outline': TSinchIconReact,
    }
  }
}
