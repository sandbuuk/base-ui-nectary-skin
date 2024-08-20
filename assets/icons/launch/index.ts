import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-launch', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-launch': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-launch': TSinchIconElement,
  }
}
