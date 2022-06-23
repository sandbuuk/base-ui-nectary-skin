import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-pan-tool', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pan-tool': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-pan-tool': TSinchIconElement,
  }
}
