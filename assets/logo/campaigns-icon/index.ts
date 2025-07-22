import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export const LogoCampaignsIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-campaigns-icon', LogoCampaignsIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-campaigns-icon': {
      props: TSinchLogoProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-campaigns-icon': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-campaigns-icon': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-logo-campaigns-icon': TSinchLogoReact,
    }
  }
}
