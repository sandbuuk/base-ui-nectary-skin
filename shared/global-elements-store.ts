// Having a separate file for the store and getConstructor() function prevents global-elements-manger.ts (and other files)
// from being imported and bundled into their build. As its only the host applications responsibility to be concerned about global-elements-manger.ts
import type { SinchElementName } from './nectary-element-base'

interface GlobalStore {
  hasInitialized: boolean,
  targetlibVersion: string,
  patchPerviousVersions: boolean,
  useFallbackExclusively: boolean,
  preload: boolean,
  definitions: Map<SinchElementName, () => Promise<any>>,
}

export const getStore = (storeKey: symbol): GlobalStore => {
  if ((window as any)[storeKey] != null) {
    return (window as any)[storeKey]
  }

  const store: GlobalStore = {
    hasInitialized: false,
    targetlibVersion: '',
    patchPerviousVersions: false,
    useFallbackExclusively: false,
    preload: false,
    definitions: new Map(),
  }

  Object.defineProperty(window, storeKey, {
    value: store,
    enumerable: false,
    writable: false,
    configurable: false,
  })

  return store
}

export const getConstructor = (storeKey: symbol, name: SinchElementName): Promise<CustomElementConstructor> | null => {
  const definitionLoader = getStore(storeKey).definitions.get(name)

  if (definitionLoader == null) {
    return null
  }

  return definitionLoader()
}
