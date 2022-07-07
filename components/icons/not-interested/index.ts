import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-not-interested', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-not-interested': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-not-interested': TSinchIconElement,
  }
}
