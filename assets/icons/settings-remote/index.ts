import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsRemote = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-remote', IconSettingsRemote)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-remote': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-remote': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-remote': TSinchIconReact,
    }
  }
}
