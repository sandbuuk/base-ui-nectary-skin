import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoMailgunIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-mailgun-icon', LogoMailgunIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-mailgun-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-mailgun-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-mailgun-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-mailgun-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }
}
