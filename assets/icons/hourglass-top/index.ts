import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-hourglass-top', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hourglass-top': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-hourglass-top': TSinchIconElement,
  }
}
