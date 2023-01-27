import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-my-location', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-my-location': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-my-location': TSinchIconElement,
  }
}
