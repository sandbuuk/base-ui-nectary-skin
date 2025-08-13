import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationPersonWithDog = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-person-with-dog', IllustrationPersonWithDog)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-person-with-dog': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-person-with-dog': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-person-with-dog': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-person-with-dog': TSinchIllustrationReact,
    }
  }
}
