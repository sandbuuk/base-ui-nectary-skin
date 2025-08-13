import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationSupportCenter = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-support-center', IllustrationSupportCenter)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-support-center': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-support-center': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-support-center': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-support-center': TSinchIllustrationReact,
    }
  }
}
