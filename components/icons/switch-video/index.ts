import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-switch-video', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-switch-video': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-switch-video': TSinchIconElement,
  }
}
