import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-wifi-protected-setup', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wifi-protected-setup': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-wifi-protected-setup': TSinchIconElement,
  }
}
