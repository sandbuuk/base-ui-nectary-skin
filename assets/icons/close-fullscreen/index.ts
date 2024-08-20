import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-close-fullscreen', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-close-fullscreen': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-close-fullscreen': TSinchIconElement,
  }
}
