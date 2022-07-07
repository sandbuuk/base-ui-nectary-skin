import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-beenhere', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-beenhere': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-beenhere': TSinchIconElement,
  }
}
