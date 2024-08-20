import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-find-replace', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-find-replace': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-find-replace': TSinchIconElement,
  }
}
