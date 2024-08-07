
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-square-hashtag', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-square-hashtag': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-square-hashtag': TSinchIconElement,
  }
}
