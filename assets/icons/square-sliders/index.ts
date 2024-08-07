
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-square-sliders', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-square-sliders': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-square-sliders': TSinchIconElement,
  }
}
