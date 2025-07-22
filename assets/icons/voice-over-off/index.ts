import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVoiceOverOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-voice-over-off', IconVoiceOverOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-voice-over-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-voice-over-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-voice-over-off': TSinchIconReact,
    }
  }
}
