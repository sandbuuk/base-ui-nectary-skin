import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-featured-play-list', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-featured-play-list': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-featured-play-list': TSinchIconElement,
  }
}
