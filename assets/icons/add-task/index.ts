import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddTask = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-task', IconAddTask)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-task': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-task': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-task': TSinchIconReact,
    }
  }
}
