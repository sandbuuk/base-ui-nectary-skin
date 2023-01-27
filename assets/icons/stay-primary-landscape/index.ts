import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-stay-primary-landscape', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stay-primary-landscape': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-stay-primary-landscape': TSinchIconElement,
  }
}
