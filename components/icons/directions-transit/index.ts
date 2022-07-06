import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-directions-transit', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-directions-transit': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-directions-transit': TSinchIconElement,
  }
}
