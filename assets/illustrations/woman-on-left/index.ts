import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationWomanOnLeft = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-woman-on-left', IllustrationWomanOnLeft)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-woman-on-left': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-woman-on-left': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-woman-on-left': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-woman-on-left': TSinchIllustrationReact,
    }
  }
}
