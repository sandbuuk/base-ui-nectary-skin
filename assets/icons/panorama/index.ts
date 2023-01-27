import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-panorama', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-panorama': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-panorama': TSinchIconElement,
  }
}
