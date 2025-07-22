import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSnippetFolder = createIconClass(templateHTML)
defineCustomElement('sinch-icon-snippet-folder', IconSnippetFolder)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-snippet-folder': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-snippet-folder': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-snippet-folder': TSinchIconReact,
    }
  }
}
