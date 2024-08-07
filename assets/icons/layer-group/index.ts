
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-layer-group', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-layer-group': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-layer-group': TSinchIconElement,
  }
}
