import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-model-training', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-model-training': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-model-training': TSinchIconElement,
  }
}
