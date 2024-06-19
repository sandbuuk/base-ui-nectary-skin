import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-camera-front', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-camera-front': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-camera-front': TSinchIconElement,
  }
}
