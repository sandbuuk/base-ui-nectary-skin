
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-heart-hand-shake', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-heart-hand-shake': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-heart-hand-shake': TSinchIconElement,
  }
}
