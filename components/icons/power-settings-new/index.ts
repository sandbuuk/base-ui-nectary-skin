import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-power-settings-new', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-power-settings-new': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-power-settings-new': TSinchIconElement,
  }
}
