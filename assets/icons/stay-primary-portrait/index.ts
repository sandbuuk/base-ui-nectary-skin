import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-stay-primary-portrait', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stay-primary-portrait': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-stay-primary-portrait': TSinchIconElement,
  }
}
