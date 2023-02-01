import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-store-mall-directory', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-store-mall-directory': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-store-mall-directory': TSinchIconElement,
  }
}
