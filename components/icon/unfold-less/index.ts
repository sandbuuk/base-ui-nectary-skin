import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-unfold-less', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-unfold-less': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-unfold-less': TSinchIconElement,
  }
}
