import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

defineCustomElement('sinch-illustration-pizza', createIllustrationClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-pizza': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-pizza': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-pizza': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-pizza': TSinchIllustrationReact,
    }
  }
}
