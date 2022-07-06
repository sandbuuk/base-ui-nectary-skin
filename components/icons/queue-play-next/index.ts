import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-queue-play-next', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-queue-play-next': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-queue-play-next': TSinchIconElement,
  }
}
