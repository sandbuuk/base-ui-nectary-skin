import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPanTool = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pan-tool', IconPanTool)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pan-tool': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pan-tool': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pan-tool': TSinchIconReact,
    }
  }
}
