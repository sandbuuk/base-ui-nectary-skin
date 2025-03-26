import { createLogoClass } from '@nectary/assets/logo/create-logo-class'
import { defineCustomElement } from '@nectary/components/utils'
import templateHTML from './template.html'
import type { TSinchLogoReact, TSinchLogoElement } from '@nectary/assets/logo/types'

defineCustomElement('gitlab-icon', createLogoClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'gitlab-icon': TSinchLogoElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'gitlab-icon': TSinchLogoReact,
    }
  }
}
