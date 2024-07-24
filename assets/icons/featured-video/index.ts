import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-featured-video', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-featured-video': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-featured-video': TSinchIconElement,
  }
}
