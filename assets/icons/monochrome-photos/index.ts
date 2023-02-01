import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-monochrome-photos', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-monochrome-photos': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-monochrome-photos': TSinchIconElement,
  }
}
