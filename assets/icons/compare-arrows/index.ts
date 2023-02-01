import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-compare-arrows', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-compare-arrows': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-compare-arrows': TSinchIconElement,
  }
}
