import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-signal-cellular-no-sim', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-signal-cellular-no-sim': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-signal-cellular-no-sim': TSinchIconElement,
  }
}
