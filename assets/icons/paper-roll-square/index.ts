
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-paper-roll-square', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-paper-roll-square': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-paper-roll-square': TSinchIconElement,
  }
}
