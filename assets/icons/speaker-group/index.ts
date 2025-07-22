import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSpeakerGroup = createIconClass(templateHTML)
defineCustomElement('sinch-icon-speaker-group', IconSpeakerGroup)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-speaker-group': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-speaker-group': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-speaker-group': TSinchIconReact,
    }
  }
}
