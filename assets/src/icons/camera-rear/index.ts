import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-camera-rear', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-camera-rear': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-camera-rear': TSinchIconElement,
  }
}
