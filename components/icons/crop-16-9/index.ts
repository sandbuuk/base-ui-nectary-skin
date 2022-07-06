import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-crop-16-9', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop-16-9': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-crop-16-9': TSinchIconElement,
  }
}
