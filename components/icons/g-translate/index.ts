import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-g-translate', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-g-translate': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-g-translate': TSinchIconElement,
  }
}
