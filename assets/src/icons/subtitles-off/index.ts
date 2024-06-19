import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-subtitles-off', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-subtitles-off': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-subtitles-off': TSinchIconElement,
  }
}
