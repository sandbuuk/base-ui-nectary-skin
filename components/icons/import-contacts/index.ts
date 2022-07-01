import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-import-contacts', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-import-contacts': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-import-contacts': TSinchIconElement,
  }
}
