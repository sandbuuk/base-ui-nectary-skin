import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-build-circle', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-build-circle': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-build-circle': TSinchIconElement,
  }
}
