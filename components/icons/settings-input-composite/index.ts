import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-settings-input-composite', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-input-composite': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-settings-input-composite': TSinchIconElement,
  }
}
