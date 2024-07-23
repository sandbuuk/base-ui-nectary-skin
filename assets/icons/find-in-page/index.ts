import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-find-in-page', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-find-in-page': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-find-in-page': TSinchIconElement,
  }
}
