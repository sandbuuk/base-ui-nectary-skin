import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-play-circle-outline', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-play-circle-outline': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-play-circle-outline': TSinchIconElement,
  }
}
