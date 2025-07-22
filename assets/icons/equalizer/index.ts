import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEqualizer = createIconClass(templateHTML)
defineCustomElement('sinch-icon-equalizer', IconEqualizer)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-equalizer': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-equalizer': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-equalizer': TSinchIconReact,
    }
  }
}
