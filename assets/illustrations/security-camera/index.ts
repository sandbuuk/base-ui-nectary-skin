import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationSecurityCamera = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-security-camera', IllustrationSecurityCamera)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-security-camera': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-security-camera': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-security-camera': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-security-camera': TSinchIllustrationReact,
    }
  }
}
