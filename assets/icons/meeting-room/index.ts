import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-meeting-room', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-meeting-room': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-meeting-room': TSinchIconElement,
  }
}
