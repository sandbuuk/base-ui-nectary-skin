import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-pause-presentation', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pause-presentation': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-pause-presentation': TSinchIconElement,
  }
}
