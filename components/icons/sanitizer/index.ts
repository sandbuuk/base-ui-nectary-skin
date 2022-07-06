import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sanitizer', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sanitizer': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sanitizer': TSinchIconElement,
  }
}
