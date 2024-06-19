import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-south-east', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-south-east': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-south-east': TSinchIconElement,
  }
}
