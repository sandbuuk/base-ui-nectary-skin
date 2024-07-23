import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-transfer-within-a-station', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-transfer-within-a-station': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-transfer-within-a-station': TSinchIconElement,
  }
}
