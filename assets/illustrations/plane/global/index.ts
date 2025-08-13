import { defineCustomElement } from '../../../utils/element'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-illustration-plane')
declare global {
  interface NectaryComponentMap {
    'sinch-illustration-plane': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-plane': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-plane': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-plane': TSinchIllustrationReact,
    }
  }
}
