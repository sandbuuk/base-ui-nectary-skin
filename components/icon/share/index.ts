import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../create-icon-class'

defineCustomElement('sinch-icon-share', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-share': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-share': TSinchIconElement,
  }
}
