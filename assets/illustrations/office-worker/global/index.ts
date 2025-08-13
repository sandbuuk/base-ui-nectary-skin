import { defineCustomElement } from '../../../utils/element'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-illustration-office-worker')
declare global {
  interface NectaryComponentMap {
    'sinch-illustration-office-worker': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-office-worker': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-office-worker': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-office-worker': TSinchIllustrationReact,
    }
  }
}
