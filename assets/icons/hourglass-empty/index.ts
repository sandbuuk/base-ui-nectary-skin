import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-hourglass-empty', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hourglass-empty': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-hourglass-empty': TSinchIconElement,
  }
}
