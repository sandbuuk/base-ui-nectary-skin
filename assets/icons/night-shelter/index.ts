import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-night-shelter', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-night-shelter': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-night-shelter': TSinchIconElement,
  }
}
