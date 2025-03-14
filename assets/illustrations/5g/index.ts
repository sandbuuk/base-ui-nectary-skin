import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '../types'

defineCustomElement('sinch-illustration-5g', createIllustrationClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-illustration-5g': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-5g': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-5g': TSinchIllustrationReact,
    }
  }
}
