import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRuleFolder = createIconClass(templateHTML)
defineCustomElement('sinch-icon-rule-folder', IconRuleFolder)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-rule-folder': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rule-folder': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-rule-folder': TSinchIconReact,
    }
  }
}
