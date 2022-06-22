import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-strikethrough-s', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-strikethrough-s': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-strikethrough-s': TSinchIconElement,
  }
}
