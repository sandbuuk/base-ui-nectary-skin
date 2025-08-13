import { NectaryElementBase, getConstructor, sinchElementNameToBase } from '@nectary/shared'
import pkg from '../package.json'
import { COMPONENTS_STORE_KEY } from './global-components-constants'
import type { ComponentName } from './component-names'

const nectaryDefinitions = new Map<ComponentName, CustomElementConstructor | undefined>()
let nectaryRegistry: CustomElementRegistry | null = null
let manualRegistration = false

const getGlobalConstructor = (name: ComponentName): Promise<CustomElementConstructor> | null => {
  return getConstructor(COMPONENTS_STORE_KEY, name)
}

export const pascalToKebabCase = (str: string): string => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

const safeDefine = (registry: CustomElementRegistry, name: ComponentName, constructor: CustomElementConstructor): void => {
  if (registry.get(name) != null) {
    return
  }

  registry.define(name, constructor)
}

export const registerComponent = (name: ComponentName, constructor: CustomElementConstructor): void => {
  if (nectaryRegistry === window.customElements) {
    throw new Error('Registering components on the global registry is not allowed. Please set a scoped registry with setNectaryRegistry() first.')
  }

  if (nectaryRegistry == null) {
    throw new Error('Nectary registry is not set. Please set a scoped registry with setNectaryRegistry() first.')
  }

  safeDefine(nectaryRegistry, name, constructor)
}

export const defineCustomElement = async (name: ComponentName, constructor?: CustomElementConstructor): Promise<void> => {
  if (manualRegistration) {
    return
  }

  // Even if constructor is undefined we should save the name in the Set, as this means the user intends to use the global component
  nectaryDefinitions.set(name, constructor)

  if (nectaryRegistry == null) {
    return
  }

  if (nectaryRegistry === window.customElements) {
    const globalConstructor = await getGlobalConstructor(name)

    if (globalConstructor !== null) {
      safeDefine(nectaryRegistry, name, globalConstructor)

      return
    }
  }

  if (constructor != null) {
    safeDefine(nectaryRegistry, name, constructor)
  }
}

interface SetNectaryRegistryOptions {
  manualRegistration?: boolean,
}

const processDefinitionsForRegistry = (registry: CustomElementRegistry): Promise<void>[] => {
  const globalConstructorPromises: Promise<void>[] = []

  for (const [name, ctor] of nectaryDefinitions.entries()) {
    if (registry === window.customElements) {
      const globalConstructorPromise = getGlobalConstructor(name)

      if (globalConstructorPromise !== null) {
        const resolvePromise = globalConstructorPromise.then((globalCtor) => {
          safeDefine(registry, name, globalCtor)
        })

        globalConstructorPromises.push(resolvePromise)
        continue
      }
    }

    if (ctor == null) {
      throw new Error(
        `Could not find constructor for ${name}.\n
        Please make sure to omit '/global' when importing your component: import '@nectary/components/${sinchElementNameToBase(name)}'\n
        If you intend to use global components, make sure to set the registry with the global registry: setNectaryRegistry(window.customElements).`
      )
    }

    safeDefine(registry, name, ctor)
  }

  nectaryDefinitions.clear()

  return globalConstructorPromises
}

export const setNectaryRegistry = (registry: CustomElementRegistry = window.customElements, options: SetNectaryRegistryOptions = {}): void => {
  manualRegistration = options.manualRegistration ?? false

  if (nectaryRegistry != null) {
    if (nectaryRegistry === window.customElements) {
      // Since we don't need to reset a global registry, just return early
      return
    }

    throw new Error('Nectary registry already set')
  }

  nectaryRegistry = registry

  if (manualRegistration) {
    nectaryDefinitions.clear() // Cleanup

    return
  }

  const globalConstructorPromises = processDefinitionsForRegistry(registry)

  if (globalConstructorPromises.length > 0) {
    Promise.all(globalConstructorPromises).catch((error) => {
      console.error('Error while registering global components', error)
    })
  }
}

export const resetNectaryRegistry = () => {
  nectaryRegistry = null
}

declare global {
  interface ShadowRootInit {
    customElements?: CustomElementRegistry,
  }
}

export class NectaryElement extends NectaryElementBase {
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
