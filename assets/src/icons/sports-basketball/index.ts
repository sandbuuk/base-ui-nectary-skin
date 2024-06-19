import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sports-basketball', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-basketball': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sports-basketball': TSinchIconElement,
  }
}
