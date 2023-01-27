import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-arrow-drop-up', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-drop-up': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-drop-up': TSinchIconElement,
  }
}
