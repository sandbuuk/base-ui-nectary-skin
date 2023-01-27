import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-restore-from-trash', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-restore-from-trash': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-restore-from-trash': TSinchIconElement,
  }
}
