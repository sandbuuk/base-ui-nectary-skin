import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationDecorativeRainbow = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-decorative-rainbow', IllustrationDecorativeRainbow)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-decorative-rainbow': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-decorative-rainbow': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-decorative-rainbow': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-decorative-rainbow': TSinchIllustrationReact,
    }
  }
}
