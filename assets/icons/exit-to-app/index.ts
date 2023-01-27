import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-exit-to-app', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-exit-to-app': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-exit-to-app': TSinchIconElement,
  }
}
