import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-bluetooth', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bluetooth': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-bluetooth': TSinchIconElement,
  }
}
