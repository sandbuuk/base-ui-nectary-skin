import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-cast-connected', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cast-connected': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-cast-connected': TSinchIconElement,
  }
}
