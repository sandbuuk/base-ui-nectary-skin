import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-picture-in-picture', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-picture-in-picture': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-picture-in-picture': TSinchIconElement,
  }
}
