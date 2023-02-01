import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-curtains-closed', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-curtains-closed': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-curtains-closed': TSinchIconElement,
  }
}
