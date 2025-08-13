import { defineCustomElement } from '../../../utils/element'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-illustration-lying-and-looking-at-the-phone')
declare global {
  interface NectaryComponentMap {
    'sinch-illustration-lying-and-looking-at-the-phone': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-lying-and-looking-at-the-phone': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-lying-and-looking-at-the-phone': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-lying-and-looking-at-the-phone': TSinchIllustrationReact,
    }
  }
}
