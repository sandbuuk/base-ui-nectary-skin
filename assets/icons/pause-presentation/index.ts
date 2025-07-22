import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPausePresentation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pause-presentation', IconPausePresentation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pause-presentation': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pause-presentation': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pause-presentation': TSinchIconReact,
    }
  }
}
