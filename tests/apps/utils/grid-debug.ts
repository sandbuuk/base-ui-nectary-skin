import type { TSinchElementReact } from '@sinch-engage/nectary/types'

const template = document.createElement('template')

template.innerHTML = `
<style>
:host {
  --sinch-grid-gutter: 24px;
  --sinch-grid-margin: 32px;

  display: flex;
  gap: var(--sinch-grid-gutter);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  box-sizing: border-box;
  padding: var(--sinch-grid-margin);
}

:host > * {
  flex: 1;
  background-color: red;
  opacity: 5%;
}

:host::before {
  font: var(--sinch-font-hero);
  color: var(--sinch-color-text-default);
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
    --sinch-grid-gutter: 24px;
    --sinch-grid-margin: 24px;
  }

  :host::before {
    content: "L";
  }
}

/* M */
@media only screen and (max-width: 1023px) {
  :host {
    --sinch-grid-gutter: 24px;
    --sinch-grid-margin: 24px;
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
    --sinch-grid-gutter: 16px;
    --sinch-grid-margin: 16px;
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

class GridDebug extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('sinch-grid-debug', GridDebug)

type TSinchGridDebugElement = HTMLElement

type TSinchGridDebugReact = TSinchElementReact<TSinchGridDebugElement>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-grid-debug': TSinchGridDebugReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-grid-debug': TSinchGridDebugElement,
  }
}
