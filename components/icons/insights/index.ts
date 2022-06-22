import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-insights', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-insights': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-insights': TSinchIconElement,
  }
}
