import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-refresh', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-refresh': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-refresh': TSinchIconElement,
  }
}
