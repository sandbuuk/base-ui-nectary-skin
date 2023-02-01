import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-video-library', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-video-library': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-video-library': TSinchIconElement,
  }
}
