import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRecordVoiceOver = createIconClass(templateHTML)
defineCustomElement('sinch-icon-record-voice-over', IconRecordVoiceOver)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-record-voice-over': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-record-voice-over': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-record-voice-over': TSinchIconReact,
    }
  }
}
