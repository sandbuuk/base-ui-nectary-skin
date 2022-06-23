import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-eject', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-eject': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-eject': TSinchIconElement,
  }
}
