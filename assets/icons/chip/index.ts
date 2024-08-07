
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-chip', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-chip': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-chip': TSinchIconElement,
  }
}
