
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-plug-socket', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-plug-socket': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-plug-socket': TSinchIconElement,
  }
}
