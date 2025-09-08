import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoMailgunIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-mailgun-icon-wordmark', LogoMailgunIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-mailgun-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-mailgun-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-mailgun-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-mailgun-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
