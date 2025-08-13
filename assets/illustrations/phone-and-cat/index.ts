import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationPhoneAndCat = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-phone-and-cat', IllustrationPhoneAndCat)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-phone-and-cat': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-phone-and-cat': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-phone-and-cat': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-phone-and-cat': TSinchIllustrationReact,
    }
  }
}
