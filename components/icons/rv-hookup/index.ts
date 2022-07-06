import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-rv-hookup', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rv-hookup': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-rv-hookup': TSinchIconElement,
  }
}
