import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-create-new-folder', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-create-new-folder': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-create-new-folder': TSinchIconElement,
  }
}
