import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-photo-library', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-photo-library': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-photo-library': TSinchIconElement,
  }
}
