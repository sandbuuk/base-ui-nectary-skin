import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoSimpleTextingIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-simple-texting-icon', LogoSimpleTextingIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-simple-texting-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-simple-texting-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-simple-texting-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-simple-texting-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
