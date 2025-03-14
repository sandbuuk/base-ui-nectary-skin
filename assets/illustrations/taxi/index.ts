import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '../types'

defineCustomElement('sinch-illustration-taxi', createIllustrationClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-illustration-taxi': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-taxi': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-taxi': TSinchIllustrationReact,
    }
  }
}
