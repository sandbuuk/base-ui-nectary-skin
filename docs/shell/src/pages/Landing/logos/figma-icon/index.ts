import { createLogoClass } from '@nectary/assets/logo/create-logo-class'
import { defineCustomElement } from '@nectary/components/utils'
import templateHTML from './template.html'
import type { TSinchLogoReact, TSinchLogoElement } from '@nectary/assets/logo/types'

defineCustomElement('figma-icon', createLogoClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'figma-icon': TSinchLogoElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'figma-icon': TSinchLogoReact,
    }
  }
}
