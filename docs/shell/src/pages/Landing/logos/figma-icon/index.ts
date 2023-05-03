import { defineCustomElement } from '@sinch-engage/nectary/utils'
import { createLogoClass } from '@sinch-engage/nectary-assets/logo/create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoReact, TSinchLogoElement } from '@sinch-engage/nectary-assets/logo/types'

defineCustomElement('figma-icon', createLogoClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'figma-icon': TSinchLogoReact,
    }

    interface HTMLElementTagNameMap {
      'figma-icon': TSinchLogoElement,
    }
  }
}
