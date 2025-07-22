import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationPersonLightbulbBackpack = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-person-lightbulb-backpack', IllustrationPersonLightbulbBackpack)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-person-lightbulb-backpack': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-person-lightbulb-backpack': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-person-lightbulb-backpack': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-person-lightbulb-backpack': TSinchIllustrationReact,
    }
  }
}
