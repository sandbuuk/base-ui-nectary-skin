import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-vertical-align-center', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-vertical-align-center': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-vertical-align-center': TSinchIconElement,
  }
}
