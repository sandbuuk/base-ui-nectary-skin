
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-ink-pen-ai', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-ink-pen-ai': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-ink-pen-ai': TSinchIconElement,
  }
}
