
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-dots-horizontal', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-dots-horizontal': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-dots-horizontal': TSinchIconElement,
  }
}
