import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-broadcast-on-home', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-broadcast-on-home': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-broadcast-on-home': TSinchIconElement,
  }
}
