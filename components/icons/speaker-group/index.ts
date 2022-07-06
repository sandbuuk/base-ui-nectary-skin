import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-speaker-group', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-speaker-group': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-speaker-group': TSinchIconElement,
  }
}
