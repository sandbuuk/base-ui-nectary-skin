import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-view-carousel', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-carousel': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-view-carousel': TSinchIconElement,
  }
}
