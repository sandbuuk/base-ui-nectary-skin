import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-new-releases', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-new-releases': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-new-releases': TSinchIconElement,
  }
}
