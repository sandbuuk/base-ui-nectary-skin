import { defineCustomElement } from '../../../utils/element'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-illustration-hand-ok')
declare global {
  interface NectaryComponentMap {
    'sinch-illustration-hand-ok': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-hand-ok': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-hand-ok': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-hand-ok': TSinchIllustrationReact,
    }
  }
}
