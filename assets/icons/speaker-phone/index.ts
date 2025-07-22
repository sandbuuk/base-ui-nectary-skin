import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSpeakerPhone = createIconClass(templateHTML)
defineCustomElement('sinch-icon-speaker-phone', IconSpeakerPhone)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-speaker-phone': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-speaker-phone': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-speaker-phone': TSinchIconReact,
    }
  }
}
