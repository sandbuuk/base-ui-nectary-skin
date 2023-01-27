import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-signal-wifi-4-bar', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-signal-wifi-4-bar': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-signal-wifi-4-bar': TSinchIconElement,
  }
}
