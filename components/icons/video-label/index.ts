import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-video-label', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-video-label': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-video-label': TSinchIconElement,
  }
}
