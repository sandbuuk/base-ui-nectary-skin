import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-desktop-windows', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-desktop-windows': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-desktop-windows': TSinchIconElement,
  }
}
