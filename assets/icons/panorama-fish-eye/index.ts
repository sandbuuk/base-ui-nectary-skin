import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-panorama-fish-eye', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-panorama-fish-eye': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-panorama-fish-eye': TSinchIconElement,
  }
}
