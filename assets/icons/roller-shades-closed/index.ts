import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-roller-shades-closed', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-roller-shades-closed': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-roller-shades-closed': TSinchIconElement,
  }
}
