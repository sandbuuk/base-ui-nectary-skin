import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sports-kabaddi', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-kabaddi': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sports-kabaddi': TSinchIconElement,
  }
}
