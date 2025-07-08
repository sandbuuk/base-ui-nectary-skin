import pkg from '../package.json'

const nectaryDefinitions = new Map<string, CustomElementConstructor>()
let nectaryRegistry: CustomElementRegistry | null = null

export const defineCustomElement = (name: string, constructor: CustomElementConstructor): void => {
  console.log(`Defining custom element: ${name} nectaryRegistry`, nectaryRegistry)

  if (nectaryRegistry !== null) {
    if (nectaryRegistry.get(name) == null) {
      nectaryRegistry.define(name, constructor)
      console.log(`Custom element ${name} defined immediately`)
    }

    console.log(`Custom element ${name} already defined in registry`)

    return
  }

  nectaryDefinitions.set(name, constructor)

  console.log(`Custom element ${name} queued for definition`)
  console.log(`Current definitions queue: ${Array.from(nectaryDefinitions.keys()).join(', ')}`)
}

export const setLabRegistry = (registry: CustomElementRegistry): void => {
  if (nectaryRegistry !== null) {
    throw new Error('Nectary registry already set')
  }

  nectaryRegistry = registry

  for (const [name, ctor] of nectaryDefinitions.entries()) {
    if (nectaryRegistry.get(name) == null) {
      nectaryRegistry.define(name, ctor)
      console.log(`Custom element ${name} defined in registry`)
    }
  }

  nectaryDefinitions.clear()
}

export const resetLabRegistry = () => {
  nectaryRegistry = null
}

declare global {
  interface ShadowRootInit {
    customElements?: CustomElementRegistry,
  }
}

export class NectaryElement extends HTMLElement {
  attachShadow(options?: Partial<ShadowRootInit>): ShadowRoot {
    return super.attachShadow({
      mode: 'open',
      delegatesFocus: false,
      customElements: nectaryRegistry!,
      ...options,
    })
  }

  version = pkg.version

  get focusable() {
    return false
  }

  #isDomConnected = false

  connectedCallback() {
    this.#isDomConnected = true
  }

  disconnectedCallback() {
    this.#isDomConnected = false
  }

  get isDomConnected(): boolean {
    return this.#isDomConnected
  }
}
