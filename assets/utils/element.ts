// eslint-disable-next-line import/no-extraneous-dependencies
import { getConstructor, NectaryElementBase, sinchElementNameToBase } from '@nectary/shared'
import pkg from '../package.json'
import { ASSETS_STORE_KEY } from './global-assets-constants'
import type { AssetName } from './asset-names'

const nectaryDefinitions = new Map<AssetName, CustomElementConstructor | undefined>()
let nectaryRegistry: CustomElementRegistry | null = null
let manualRegistration = false

const getGlobalConstructor = (name: AssetName): Promise<CustomElementConstructor> | null => {
  return getConstructor(ASSETS_STORE_KEY, name)
}

export const pascalToKebabCase = (str: string): string => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

const safeDefine = (registry: CustomElementRegistry, name: string, constructor: CustomElementConstructor): void => {
  if (registry.get(name) != null) {
    return
  }

  registry.define(name, constructor)
}

export const registerAsset = (name: AssetName, constructor: CustomElementConstructor): void => {
  if (nectaryRegistry === window.customElements) {
    throw new Error('Registering assets on the global registry is not allowed. Please set a scoped registry with setAssetsRegistry() first.')
  }

  if (nectaryRegistry == null) {
    throw new Error('Nectary registry is not set. Please set a scoped registry with setAssetsRegistry() first.')
  }

  safeDefine(nectaryRegistry, name, constructor)
}

export const defineCustomElement = async (name: AssetName, constructor?: CustomElementConstructor): Promise<void> => {
  if (manualRegistration) {
    return
  }

  // Even if constructor is undefined we should save the name in the Set, as this means the user intends to use the global asset
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

interface SetAssetsRegistryOptions {
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
        Please make sure to omit '/global' when importing your asset: import '@nectary/assets/${sinchElementNameToBase(name)}'\n
        If you intend to use global assets, make sure to set the registry with the global registry: setAssetsRegistry(window.customElements).`
      )
    }

    safeDefine(registry, name, ctor)
  }

  nectaryDefinitions.clear()

  return globalConstructorPromises
}

export const setAssetsRegistry = (registry: CustomElementRegistry = window.customElements, options: SetAssetsRegistryOptions = {}): void => {
  manualRegistration = options.manualRegistration ?? false

  if (nectaryRegistry != null) {
    if (nectaryRegistry === window.customElements) {
      // Since we don't need to reset a global registry, just return early
      return
    }

    throw new Error('Assets registry already set')
  }

  nectaryRegistry = registry

  if (manualRegistration) {
    nectaryDefinitions.clear() // Cleanup

    return
  }

  const globalConstructorPromises = processDefinitionsForRegistry(registry)

  if (globalConstructorPromises.length > 0) {
    Promise.all(globalConstructorPromises).catch((error) => {
      console.error('Error while registering global assets', error)
    })
  }
}

export const resetAssetsRegistry = () => {
  nectaryRegistry = null
}

declare global {
  interface ShadowRootInit {
    customElements?: CustomElementRegistry,
  }
}

export class NectaryElement extends NectaryElementBase {
  attachShadow(): ShadowRoot {
    return super.attachShadow({
      mode: 'open',
      delegatesFocus: false,
      customElements: nectaryRegistry!,
    })
  }

  version = pkg.version
}
