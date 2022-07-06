import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-tv', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tv': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-tv': TSinchIconElement,
  }
}
