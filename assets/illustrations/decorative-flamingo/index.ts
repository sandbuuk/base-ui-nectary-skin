import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationDecorativeFlamingo = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-decorative-flamingo', IllustrationDecorativeFlamingo)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-decorative-flamingo': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-decorative-flamingo': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-decorative-flamingo': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-decorative-flamingo': TSinchIllustrationReact,
    }
  }
}
