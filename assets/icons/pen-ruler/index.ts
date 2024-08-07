
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-pen-ruler', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pen-ruler': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-pen-ruler': TSinchIconElement,
  }
}
