import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationCreditCard30Degrees = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-credit-card-30-degrees', IllustrationCreditCard30Degrees)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-credit-card-30-degrees': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-credit-card-30-degrees': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-credit-card-30-degrees': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-credit-card-30-degrees': TSinchIllustrationReact,
    }
  }
}
