import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-home-work', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-home-work': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-home-work': TSinchIconElement,
  }
}
