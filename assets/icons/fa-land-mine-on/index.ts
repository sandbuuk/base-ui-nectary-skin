
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-fa-land-mine-on', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fa-land-mine-on': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-fa-land-mine-on': TSinchIconElement,
  }
}
