import { defineCustomElement } from '@sinch-engage/nectary/utils'
import { createLogoClass } from '@sinch-engage/nectary-assets/logo/create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoReact, TSinchLogoElement } from '@sinch-engage/nectary-assets/logo/types'

defineCustomElement('gitlab-icon', createLogoClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gitlab-icon': TSinchLogoReact,
    }

    interface HTMLElementTagNameMap {
      'gitlab-icon': TSinchLogoElement,
    }
  }
}
