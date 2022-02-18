import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../create-icon-class'

defineCustomElement('sinch-icon-navigation-south', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-navigation-south': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-navigation-south': TSinchIconElement,
  }
}
