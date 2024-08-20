import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-broken-image', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-broken-image': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-broken-image': TSinchIconElement,
  }
}
