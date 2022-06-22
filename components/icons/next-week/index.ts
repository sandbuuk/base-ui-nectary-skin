import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-next-week', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-next-week': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-next-week': TSinchIconElement,
  }
}
