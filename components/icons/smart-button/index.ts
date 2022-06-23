import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-smart-button', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-smart-button': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-smart-button': TSinchIconElement,
  }
}
