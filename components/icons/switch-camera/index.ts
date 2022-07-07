import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-switch-camera', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-switch-camera': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-switch-camera': TSinchIconElement,
  }
}
