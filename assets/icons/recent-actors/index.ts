import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-recent-actors', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-recent-actors': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-recent-actors': TSinchIconElement,
  }
}
