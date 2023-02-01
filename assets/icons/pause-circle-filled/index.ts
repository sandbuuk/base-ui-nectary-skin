import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-pause-circle-filled', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pause-circle-filled': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-pause-circle-filled': TSinchIconElement,
  }
}
