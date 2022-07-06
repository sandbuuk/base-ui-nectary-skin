import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-set-meal', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-set-meal': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-set-meal': TSinchIconElement,
  }
}
