import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAudiotrack = createIconClass(templateHTML)
defineCustomElement('sinch-icon-audiotrack', IconAudiotrack)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-audiotrack': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-audiotrack': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-audiotrack': TSinchIconReact,
    }
  }
}
