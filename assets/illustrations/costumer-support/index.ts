import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationCostumerSupport = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-costumer-support', IllustrationCostumerSupport)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-costumer-support': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-costumer-support': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-costumer-support': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-costumer-support': TSinchIllustrationReact,
    }
  }
}
