import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-crop-original', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop-original': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-crop-original': TSinchIconElement,
  }
}
