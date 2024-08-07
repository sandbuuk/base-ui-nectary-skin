
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-lightbulb-on', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-lightbulb-on': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-lightbulb-on': TSinchIconElement,
  }
}
