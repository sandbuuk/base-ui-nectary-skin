import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-linked-camera', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-linked-camera': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-linked-camera': TSinchIconElement,
  }
}
