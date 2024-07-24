import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-nest-cam-wired-stand', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-nest-cam-wired-stand': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-nest-cam-wired-stand': TSinchIconElement,
  }
}
