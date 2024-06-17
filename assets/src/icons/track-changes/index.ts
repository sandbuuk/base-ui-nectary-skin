import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-track-changes', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-track-changes': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-track-changes': TSinchIconElement,
  }
}
