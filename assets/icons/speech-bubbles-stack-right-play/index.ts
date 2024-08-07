
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-speech-bubbles-stack-right-play', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-speech-bubbles-stack-right-play': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-speech-bubbles-stack-right-play': TSinchIconElement,
  }
}
