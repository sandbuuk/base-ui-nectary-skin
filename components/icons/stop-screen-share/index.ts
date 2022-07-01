import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-stop-screen-share', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stop-screen-share': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-stop-screen-share': TSinchIconElement,
  }
}
