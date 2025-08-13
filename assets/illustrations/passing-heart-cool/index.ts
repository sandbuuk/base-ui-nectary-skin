import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationPassingHeartCool = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-passing-heart-cool', IllustrationPassingHeartCool)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-passing-heart-cool': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-passing-heart-cool': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-passing-heart-cool': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-passing-heart-cool': TSinchIllustrationReact,
    }
  }
}
