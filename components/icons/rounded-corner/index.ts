import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-rounded-corner', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rounded-corner': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-rounded-corner': TSinchIconElement,
  }
}
