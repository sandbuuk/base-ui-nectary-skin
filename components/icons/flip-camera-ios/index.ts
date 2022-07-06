import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-flip-camera-ios', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flip-camera-ios': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-flip-camera-ios': TSinchIconElement,
  }
}
