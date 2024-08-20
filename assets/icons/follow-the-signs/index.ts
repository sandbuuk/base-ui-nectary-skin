import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-follow-the-signs', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-follow-the-signs': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-follow-the-signs': TSinchIconElement,
  }
}
