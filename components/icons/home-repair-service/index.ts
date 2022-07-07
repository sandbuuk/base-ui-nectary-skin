import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-home-repair-service', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-home-repair-service': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-home-repair-service': TSinchIconElement,
  }
}
