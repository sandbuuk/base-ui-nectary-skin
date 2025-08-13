import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationGlobalReach = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-global-reach', IllustrationGlobalReach)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-global-reach': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-global-reach': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-global-reach': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-global-reach': TSinchIllustrationReact,
    }
  }
}
