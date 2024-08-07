
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-speech-bubble-circle-plus', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-speech-bubble-circle-plus': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-speech-bubble-circle-plus': TSinchIconElement,
  }
}
