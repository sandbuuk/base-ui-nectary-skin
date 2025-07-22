import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNewReleases = createIconClass(templateHTML)
defineCustomElement('sinch-icon-new-releases', IconNewReleases)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-new-releases': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-new-releases': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-new-releases': TSinchIconReact,
    }
  }
}
