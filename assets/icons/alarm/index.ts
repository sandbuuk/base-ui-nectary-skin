import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-alarm', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-alarm': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-alarm': TSinchIconElement,
  }
}
