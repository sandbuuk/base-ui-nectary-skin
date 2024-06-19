import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-view-list', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-list': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-view-list': TSinchIconElement,
  }
}
