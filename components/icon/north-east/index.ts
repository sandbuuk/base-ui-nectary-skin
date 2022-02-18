import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../create-icon-class'

defineCustomElement('sinch-icon-north-east', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-north-east': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-north-east': TSinchIconElement,
  }
}
