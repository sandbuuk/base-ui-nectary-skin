import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-smoke-free', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-smoke-free': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-smoke-free': TSinchIconElement,
  }
}
