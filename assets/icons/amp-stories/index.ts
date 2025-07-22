import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAmpStories = createIconClass(templateHTML)
defineCustomElement('sinch-icon-amp-stories', IconAmpStories)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-amp-stories': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-amp-stories': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-amp-stories': TSinchIconReact,
    }
  }
}
