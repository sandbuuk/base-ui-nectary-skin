
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-fa-comment-xmark', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fa-comment-xmark': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-fa-comment-xmark': TSinchIconElement,
  }
}
