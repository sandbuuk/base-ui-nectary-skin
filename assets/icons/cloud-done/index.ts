import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-cloud-done', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cloud-done': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-cloud-done': TSinchIconElement,
  }
}
