import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-dynamic-feed', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-dynamic-feed': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-dynamic-feed': TSinchIconElement,
  }
}
