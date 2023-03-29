import { createLogoClass } from '@sinch-engage/nectary/logo/create-logo-class'
import { defineCustomElement } from '@sinch-engage/nectary/utils'
import templateHTML from './template.html'
import type { TSinchLogoReact, TSinchLogoElement } from '@sinch-engage/nectary/logo/types'

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
