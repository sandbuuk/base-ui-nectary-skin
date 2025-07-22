import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export const LogoPortalSinchIdIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-portal-sinch-id-icon-wordmark', LogoPortalSinchIdIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-sinch-id-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-sinch-id-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-sinch-id-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
