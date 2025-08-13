import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationMessagesShopping = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-messages-shopping', IllustrationMessagesShopping)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-messages-shopping': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-messages-shopping': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-messages-shopping': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-messages-shopping': TSinchIllustrationReact,
    }
  }
}
