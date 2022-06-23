import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-android', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-android': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-android': TSinchIconElement,
  }
}
