import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-apps', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-apps': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-apps': TSinchIconElement,
  }
}
