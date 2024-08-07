
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-microphone-circle-play', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-microphone-circle-play': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-microphone-circle-play': TSinchIconElement,
  }
}
