import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-whatshot', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-whatshot': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-whatshot': TSinchIconElement,
  }
}
