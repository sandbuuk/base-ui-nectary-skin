
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-laptop-speech-bubble-stack-left-play', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-laptop-speech-bubble-stack-left-play': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-laptop-speech-bubble-stack-left-play': TSinchIconElement,
  }
}
