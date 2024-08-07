
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-ball-tennis', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-ball-tennis': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-ball-tennis': TSinchIconElement,
  }
}
