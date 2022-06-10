import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-volume-up', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-volume-up': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-volume-up': TSinchIconElement,
  }
}
