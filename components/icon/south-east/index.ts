import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../create-icon-class'

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
