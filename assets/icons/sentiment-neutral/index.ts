import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sentiment-neutral', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sentiment-neutral': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sentiment-neutral': TSinchIconElement,
  }
}
