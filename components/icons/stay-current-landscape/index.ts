import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-stay-current-landscape', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stay-current-landscape': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-stay-current-landscape': TSinchIconElement,
  }
}
