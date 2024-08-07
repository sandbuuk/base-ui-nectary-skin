
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-building-office', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-building-office': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-building-office': TSinchIconElement,
  }
}
