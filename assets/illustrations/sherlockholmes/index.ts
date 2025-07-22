import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationSherlockholmes = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-sherlockholmes', IllustrationSherlockholmes)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-sherlockholmes': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-sherlockholmes': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-sherlockholmes': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-sherlockholmes': TSinchIllustrationReact,
    }
  }
}
