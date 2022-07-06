import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-photo-camera', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-photo-camera': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-photo-camera': TSinchIconElement,
  }
}
