import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-self-improvement', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-self-improvement': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-self-improvement': TSinchIconElement,
  }
}
