import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-screen-lock-rotation', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-screen-lock-rotation': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-screen-lock-rotation': TSinchIconElement,
  }
}
