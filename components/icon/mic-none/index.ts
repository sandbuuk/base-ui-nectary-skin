import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-mic-none', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mic-none': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-mic-none': TSinchIconElement,
  }
}
