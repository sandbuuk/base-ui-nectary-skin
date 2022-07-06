import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-emoji-people', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-emoji-people': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-emoji-people': TSinchIconElement,
  }
}
