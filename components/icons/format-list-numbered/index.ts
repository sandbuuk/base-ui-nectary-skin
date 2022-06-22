import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-format-list-numbered', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-list-numbered': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-format-list-numbered': TSinchIconElement,
  }
}
