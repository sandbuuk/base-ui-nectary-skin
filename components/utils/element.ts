import pkg from '../package.json'

const nectaryDefinitions = new Map<string, CustomElementConstructor>()
let nectaryRegistry: CustomElementRegistry | null = null

export const defineCustomElement = (name: string, constructor: CustomElementConstructor): void => {
  if (nectaryRegistry !== null) {
    if (nectaryRegistry.get(name) == null) {
      nectaryRegistry.define(name, constructor)
    }

    return
  }

  nectaryDefinitions.set(name, constructor)
}

export const setNectaryRegistry = (registry: CustomElementRegistry): void => {
  if (nectaryRegistry !== null) {
    throw new Error('Nectary registry already set')
  }

  nectaryRegistry = registry

  for (const [name, ctor] of nectaryDefinitions.entries()) {
    if (nectaryRegistry.get(name) == null) {
      nectaryRegistry.define(name, ctor)
    }
  }

  nectaryDefinitions.clear()
}

declare global {
  interface ShadowRootInit {
    customElements?: CustomElementRegistry,
  }
}

export class NectaryElement extends HTMLElement {
  attachShadow(options?: Partial<ShadowRootInit>): ShadowRoot {
    return super.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
      customElements: nectaryRegistry!,
      ...options,
    })
  }

  version = pkg.version

  get focusable() {
    return false
  }

  #isConnected = false

  connectedCallback() {
    this.#isConnected = true
  }

  disconnectedCallback() {
    this.#isConnected = false
  }

  get isConnected(): boolean {
    return this.#isConnected
  }
}
