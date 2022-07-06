import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-computer', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-computer': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-computer': TSinchIconElement,
  }
}
