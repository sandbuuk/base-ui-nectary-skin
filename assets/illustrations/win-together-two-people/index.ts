import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationWinTogetherTwoPeople = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-win-together-two-people', IllustrationWinTogetherTwoPeople)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-win-together-two-people': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-win-together-two-people': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-win-together-two-people': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-win-together-two-people': TSinchIllustrationReact,
    }
  }
}
