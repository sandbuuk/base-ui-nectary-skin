import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationHandsLaptop = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-hands-laptop', IllustrationHandsLaptop)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-hands-laptop': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-hands-laptop': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-hands-laptop': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-hands-laptop': TSinchIllustrationReact,
    }
  }
}
