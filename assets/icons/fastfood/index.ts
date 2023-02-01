import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-fastfood', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fastfood': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-fastfood': TSinchIconElement,
  }
}
