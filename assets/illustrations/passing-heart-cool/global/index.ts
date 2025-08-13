import { defineCustomElement } from '../../../utils/element'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-illustration-passing-heart-cool')
declare global {
  interface NectaryComponentMap {
    'sinch-illustration-passing-heart-cool': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-passing-heart-cool': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-passing-heart-cool': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-passing-heart-cool': TSinchIllustrationReact,
    }
  }
}
