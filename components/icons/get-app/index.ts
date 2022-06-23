import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-get-app', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-get-app': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-get-app': TSinchIconElement,
  }
}
