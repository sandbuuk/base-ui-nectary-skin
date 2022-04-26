import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-unfold-more', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-unfold-more': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-unfold-more': TSinchIconElement,
  }
}
