import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-wheelchair-pickup', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wheelchair-pickup': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-wheelchair-pickup': TSinchIconElement,
  }
}
