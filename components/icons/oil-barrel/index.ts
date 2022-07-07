import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-oil-barrel', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-oil-barrel': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-oil-barrel': TSinchIconElement,
  }
}
