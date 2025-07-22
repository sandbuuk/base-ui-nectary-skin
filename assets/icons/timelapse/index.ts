import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTimelapse = createIconClass(templateHTML)
defineCustomElement('sinch-icon-timelapse', IconTimelapse)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-timelapse': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-timelapse': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-timelapse': TSinchIconReact,
    }
  }
}
