import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-edit', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-edit': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-edit': TSinchIconElement,
  }
}
