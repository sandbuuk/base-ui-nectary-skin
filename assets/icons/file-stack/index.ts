
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-file-stack', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-file-stack': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-file-stack': TSinchIconElement,
  }
}
