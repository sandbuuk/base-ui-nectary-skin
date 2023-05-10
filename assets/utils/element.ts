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

export const setAssetsRegistry = (registry: CustomElementRegistry): void => {
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
  attachShadow(): ShadowRoot {
    return super.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
      customElements: nectaryRegistry!,
    })
  }

  version = pkg.version
}
