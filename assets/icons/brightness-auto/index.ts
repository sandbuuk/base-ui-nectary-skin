import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-brightness-auto', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-brightness-auto': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-brightness-auto': TSinchIconElement,
  }
}
