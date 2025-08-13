import { defineCustomElement, NectaryElement } from '@nectary/components/utils'
import type { NectaryComponentReactByType } from '@nectary/components/types'

const template = document.createElement('template')

template.innerHTML = `
<style>
:host {
  --sinch-local-grid-gutter: 24px;
  --sinch-local-grid-margin: 32px;

  display: flex;
  gap: var(--sinch-local-grid-gutter);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  box-sizing: border-box;
  padding: var(--sinch-local-grid-margin);
}

:host > * {
  flex: 1;
  background-color: red;
  opacity: 5%;
}

:host::before {
  font: var(--sinch-sys-font-desktop-title-xl);
  color: var(--sinch-sys-color-text-default);
  position: absolute;
  left: 0;
  top: 0;
  content: "XL";
  font-size: 96px;
  line-height: 128px;
  text-shadow: 0 0 16px  white;
}

/* L */
@media only screen and (max-width: 1439px) {
  :host {
    --sinch-local-grid-gutter: 24px;
    --sinch-local-grid-margin: 24px;
  }

  :host::before {
    content: "L";
  }
}

/* M */
@media only screen and (max-width: 1023px) {
  :host {
    --sinch-local-grid-gutter: 24px;
    --sinch-local-grid-margin: 24px;
  }

  .l {
    display: none;
  }

  :host::before {
    content: "M";
  }
}

/* S */
@media only screen and (max-width: 767px) {
  :host {
    --sinch-local-grid-gutter: 16px;
    --sinch-local-grid-margin: 16px;
  }

  .m {
    display: none;
  }

  :host::before {
    content: "S";
  }
}
</style>

<div class="s"></div>
<div class="s"></div>
<div class="s"></div>
<div class="s"></div>
<div class="m"></div>
<div class="m"></div>
<div class="m"></div>
<div class="m"></div>
<div class="l"></div>
<div class="l"></div>
<div class="l"></div>
<div class="l"></div>
`

class GridDebug extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

defineCustomElement('test-grid-debug' as any, GridDebug)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'test-grid-debug': NectaryComponentReactByType<HTMLElement>,
    }
  }

  interface HTMLElementTagNameMap {
    'test-grid-debug': HTMLElement,
  }
}

