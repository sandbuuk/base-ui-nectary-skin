import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-alarm-add', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-alarm-add': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-alarm-add': TSinchIconElement,
  }
}
