import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPauseCircleOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pause-circle-outline', IconPauseCircleOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pause-circle-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pause-circle-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pause-circle-outline': TSinchIconReact,
    }
  }
}
