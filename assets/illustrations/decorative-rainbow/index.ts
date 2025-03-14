import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '../types'

defineCustomElement('sinch-illustration-decorative-rainbow', createIllustrationClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-illustration-decorative-rainbow': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-decorative-rainbow': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-decorative-rainbow': TSinchIllustrationReact,
    }
  }
}
