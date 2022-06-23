import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-privacy-tip', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-privacy-tip': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-privacy-tip': TSinchIconElement,
  }
}
