import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-av-timer', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-av-timer': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-av-timer': TSinchIconElement,
  }
}
