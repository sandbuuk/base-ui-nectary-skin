import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsVoice = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-voice', IconSettingsVoice)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-voice': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-voice': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-voice': TSinchIconReact,
    }
  }
}
