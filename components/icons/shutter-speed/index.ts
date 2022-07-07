import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-shutter-speed', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-shutter-speed': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-shutter-speed': TSinchIconElement,
  }
}
