import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-construction', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-construction': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-construction': TSinchIconElement,
  }
}
