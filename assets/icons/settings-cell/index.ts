import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-settings-cell', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-cell': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-settings-cell': TSinchIconElement,
  }
}
