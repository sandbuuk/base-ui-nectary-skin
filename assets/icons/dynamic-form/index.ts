import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDynamicForm = createIconClass(templateHTML)
defineCustomElement('sinch-icon-dynamic-form', IconDynamicForm)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-dynamic-form': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-dynamic-form': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-dynamic-form': TSinchIconReact,
    }
  }
}
