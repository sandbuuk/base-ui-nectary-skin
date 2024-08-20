import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-backup', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-backup': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-backup': TSinchIconElement,
  }
}
