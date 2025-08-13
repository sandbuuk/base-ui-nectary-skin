import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoMailjetIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-mailjet-icon-wordmark', LogoMailjetIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-mailjet-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-mailjet-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-mailjet-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
