
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-mask-theatre', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mask-theatre': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-mask-theatre': TSinchIconElement,
  }
}
