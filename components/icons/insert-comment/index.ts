import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-insert-comment', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-insert-comment': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-insert-comment': TSinchIconElement,
  }
}
