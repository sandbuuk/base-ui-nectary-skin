import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-pause-circle-outline', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pause-circle-outline': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-pause-circle-outline': TSinchIconElement,
  }
}
