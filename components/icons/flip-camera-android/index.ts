import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-flip-camera-android', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flip-camera-android': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-flip-camera-android': TSinchIconElement,
  }
}
