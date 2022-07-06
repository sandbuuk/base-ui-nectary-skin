import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-maps-ugc', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-maps-ugc': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-maps-ugc': TSinchIconElement,
  }
}
