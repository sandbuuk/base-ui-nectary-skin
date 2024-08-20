import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-collections-bookmark', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-collections-bookmark': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-collections-bookmark': TSinchIconElement,
  }
}
