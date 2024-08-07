
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-smartphone-speech-bubble', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-smartphone-speech-bubble': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-smartphone-speech-bubble': TSinchIconElement,
  }
}
