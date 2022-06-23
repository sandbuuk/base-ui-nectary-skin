import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-open-in-browser', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-open-in-browser': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-open-in-browser': TSinchIconElement,
  }
}
