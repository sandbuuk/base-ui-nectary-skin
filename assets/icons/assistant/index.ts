import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-assistant', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-assistant': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-assistant': TSinchIconElement,
  }
}
