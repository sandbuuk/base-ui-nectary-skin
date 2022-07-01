import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-contacts', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-contacts': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-contacts': TSinchIconElement,
  }
}
