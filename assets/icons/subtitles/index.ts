import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-subtitles', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-subtitles': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-subtitles': TSinchIconElement,
  }
}
