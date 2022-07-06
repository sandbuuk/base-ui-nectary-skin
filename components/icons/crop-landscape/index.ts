import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-crop-landscape', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop-landscape': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-crop-landscape': TSinchIconElement,
  }
}
