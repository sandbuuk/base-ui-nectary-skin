import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-fire-extinguisher', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fire-extinguisher': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-fire-extinguisher': TSinchIconElement,
  }
}
