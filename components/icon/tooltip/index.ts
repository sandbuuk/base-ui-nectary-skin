import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../create-icon-class'

defineCustomElement('sinch-icon-tooltip', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tooltip': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-tooltip': TSinchIconElement,
  }
}
