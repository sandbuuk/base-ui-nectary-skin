import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-mode-comment', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mode-comment': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-mode-comment': TSinchIconElement,
  }
}
