import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationShoppingCart = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-shopping-cart', IllustrationShoppingCart)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-shopping-cart': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-shopping-cart': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-shopping-cart': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-shopping-cart': TSinchIllustrationReact,
    }
  }
}
