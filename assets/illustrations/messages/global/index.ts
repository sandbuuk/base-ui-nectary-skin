import { defineCustomElement } from '../../../utils/element'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-illustration-messages')
declare global {
  interface NectaryComponentMap {
    'sinch-illustration-messages': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-messages': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-messages': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-messages': TSinchIllustrationReact,
    }
  }
}
