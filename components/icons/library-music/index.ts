import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-library-music', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-library-music': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-library-music': TSinchIconElement,
  }
}
