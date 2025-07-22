import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSubtitlesOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-subtitles-off', IconSubtitlesOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-subtitles-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-subtitles-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-subtitles-off': TSinchIconReact,
    }
  }
}
