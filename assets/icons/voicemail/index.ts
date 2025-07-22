import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVoicemail = createIconClass(templateHTML)
defineCustomElement('sinch-icon-voicemail', IconVoicemail)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-voicemail': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-voicemail': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-voicemail': TSinchIconReact,
    }
  }
}
