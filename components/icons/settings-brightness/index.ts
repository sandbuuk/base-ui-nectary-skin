import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-settings-brightness', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-brightness': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-settings-brightness': TSinchIconElement,
  }
}
