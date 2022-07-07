import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-group-add', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-group-add': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-group-add': TSinchIconElement,
  }
}
