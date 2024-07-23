import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-play-circle-filled', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-play-circle-filled': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-play-circle-filled': TSinchIconElement,
  }
}
