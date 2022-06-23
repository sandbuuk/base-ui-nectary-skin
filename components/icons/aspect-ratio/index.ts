import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-aspect-ratio', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-aspect-ratio': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-aspect-ratio': TSinchIconElement,
  }
}
