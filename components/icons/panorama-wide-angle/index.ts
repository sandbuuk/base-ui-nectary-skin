import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-panorama-wide-angle', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-panorama-wide-angle': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-panorama-wide-angle': TSinchIconElement,
  }
}
