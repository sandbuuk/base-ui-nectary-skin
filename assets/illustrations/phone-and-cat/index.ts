import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '../types'

defineCustomElement('sinch-illustration-phone-and-cat', createIllustrationClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-illustration-phone-and-cat': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-phone-and-cat': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-phone-and-cat': TSinchIllustrationReact,
    }
  }
}
