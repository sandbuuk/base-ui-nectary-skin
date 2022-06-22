import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-space-bar', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-space-bar': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-space-bar': TSinchIconElement,
  }
}
