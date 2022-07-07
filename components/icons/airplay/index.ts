import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-airplay', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-airplay': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-airplay': TSinchIconElement,
  }
}
