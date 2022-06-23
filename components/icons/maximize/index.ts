import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-maximize', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-maximize': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-maximize': TSinchIconElement,
  }
}
