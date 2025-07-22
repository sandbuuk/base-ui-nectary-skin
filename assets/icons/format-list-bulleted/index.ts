import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatListBulleted = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-list-bulleted', IconFormatListBulleted)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-list-bulleted': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-list-bulleted': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-list-bulleted': TSinchIconReact,
    }
  }
}
