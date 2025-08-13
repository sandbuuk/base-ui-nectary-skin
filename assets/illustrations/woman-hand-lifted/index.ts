import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationWomanHandLifted = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-woman-hand-lifted', IllustrationWomanHandLifted)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-woman-hand-lifted': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-woman-hand-lifted': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-woman-hand-lifted': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-woman-hand-lifted': TSinchIllustrationReact,
    }
  }
}
