import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationFlowerHand = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-flower-hand', IllustrationFlowerHand)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-flower-hand': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-flower-hand': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-flower-hand': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-flower-hand': TSinchIllustrationReact,
    }
  }
}
