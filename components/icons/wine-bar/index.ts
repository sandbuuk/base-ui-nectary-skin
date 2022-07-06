import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-wine-bar', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wine-bar': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-wine-bar': TSinchIconElement,
  }
}
