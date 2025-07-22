import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationTextingSofa = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-texting-sofa', IllustrationTextingSofa)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-texting-sofa': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-texting-sofa': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-texting-sofa': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-texting-sofa': TSinchIllustrationReact,
    }
  }
}
