import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationMagnifyingGlass = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-magnifying-glass', IllustrationMagnifyingGlass)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-magnifying-glass': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-magnifying-glass': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-magnifying-glass': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-magnifying-glass': TSinchIllustrationReact,
    }
  }
}
