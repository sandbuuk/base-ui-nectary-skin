import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-open-in-full', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-open-in-full': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-open-in-full': TSinchIconElement,
  }
}
