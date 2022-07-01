import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-brightness-medium', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-brightness-medium': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-brightness-medium': TSinchIconElement,
  }
}
