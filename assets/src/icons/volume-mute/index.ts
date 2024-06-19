import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-volume-mute', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-volume-mute': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-volume-mute': TSinchIconElement,
  }
}
