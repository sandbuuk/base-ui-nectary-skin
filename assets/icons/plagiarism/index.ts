import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPlagiarism = createIconClass(templateHTML)
defineCustomElement('sinch-icon-plagiarism', IconPlagiarism)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-plagiarism': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-plagiarism': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-plagiarism': TSinchIconReact,
    }
  }
}
