import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationGirlOnPhone = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-girl-on-phone', IllustrationGirlOnPhone)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-girl-on-phone': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-girl-on-phone': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-girl-on-phone': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-girl-on-phone': TSinchIllustrationReact,
    }
  }
}
