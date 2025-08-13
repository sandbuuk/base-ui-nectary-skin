import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationLyingAndLookingAtThePhone = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-lying-and-looking-at-the-phone', IllustrationLyingAndLookingAtThePhone)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-lying-and-looking-at-the-phone': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-lying-and-looking-at-the-phone': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-lying-and-looking-at-the-phone': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-lying-and-looking-at-the-phone': TSinchIllustrationReact,
    }
  }
}
