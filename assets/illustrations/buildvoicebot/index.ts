import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationBuildvoicebot = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-buildvoicebot', IllustrationBuildvoicebot)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-buildvoicebot': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-buildvoicebot': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-buildvoicebot': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-buildvoicebot': TSinchIllustrationReact,
    }
  }
}
