import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-cast-for-education', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cast-for-education': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-cast-for-education': TSinchIconElement,
  }
}
