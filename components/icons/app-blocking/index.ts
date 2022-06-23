import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-app-blocking', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-app-blocking': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-app-blocking': TSinchIconElement,
  }
}
