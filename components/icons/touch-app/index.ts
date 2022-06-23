import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-touch-app', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-touch-app': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-touch-app': TSinchIconElement,
  }
}
