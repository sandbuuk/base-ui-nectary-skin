import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-emoji-transportation', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-emoji-transportation': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-emoji-transportation': TSinchIconElement,
  }
}
