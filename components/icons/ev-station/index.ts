import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-ev-station', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-ev-station': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-ev-station': TSinchIconElement,
  }
}
