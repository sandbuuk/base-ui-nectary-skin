import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-undo', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-undo': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-undo': TSinchIconElement,
  }
}
