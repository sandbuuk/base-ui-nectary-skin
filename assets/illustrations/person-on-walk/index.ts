import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationPersonOnWalk = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-person-on-walk', IllustrationPersonOnWalk)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-person-on-walk': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-person-on-walk': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-person-on-walk': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-person-on-walk': TSinchIllustrationReact,
    }
  }
}
