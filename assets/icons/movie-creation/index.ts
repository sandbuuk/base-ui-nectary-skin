import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-movie-creation', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-movie-creation': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-movie-creation': TSinchIconElement,
  }
}
