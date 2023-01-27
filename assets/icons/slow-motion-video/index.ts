import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-slow-motion-video', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-slow-motion-video': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-slow-motion-video': TSinchIconElement,
  }
}
