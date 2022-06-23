import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-favorite-border', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-favorite-border': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-favorite-border': TSinchIconElement,
  }
}
