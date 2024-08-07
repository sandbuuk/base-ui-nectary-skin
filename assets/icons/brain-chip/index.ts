
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-brain-chip', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-brain-chip': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-brain-chip': TSinchIconElement,
  }
}
