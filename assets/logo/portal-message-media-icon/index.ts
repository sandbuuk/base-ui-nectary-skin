import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoPortalMessageMediaIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-portal-message-media-icon', LogoPortalMessageMediaIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-message-media-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-message-media-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-message-media-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
