import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-dvr', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-dvr': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-dvr': TSinchIconElement,
  }
}
