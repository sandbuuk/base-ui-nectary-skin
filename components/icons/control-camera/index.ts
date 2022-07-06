import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-control-camera', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-control-camera': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-control-camera': TSinchIconElement,
  }
}
