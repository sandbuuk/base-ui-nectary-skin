import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-cloud-queue', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cloud-queue': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-cloud-queue': TSinchIconElement,
  }
}
