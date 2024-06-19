import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-north-west', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-north-west': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-north-west': TSinchIconElement,
  }
}
