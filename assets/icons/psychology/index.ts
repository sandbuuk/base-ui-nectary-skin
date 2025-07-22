import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPsychology = createIconClass(templateHTML)
defineCustomElement('sinch-icon-psychology', IconPsychology)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-psychology': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-psychology': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-psychology': TSinchIconReact,
    }
  }
}
