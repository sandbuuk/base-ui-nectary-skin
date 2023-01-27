import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-mood-bad', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mood-bad': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-mood-bad': TSinchIconElement,
  }
}
