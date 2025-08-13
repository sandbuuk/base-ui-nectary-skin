import { getConstructor, getStore } from './global-elements-store'
import { isSinchElementName, sinchElementNameToBase } from './nectary-element-base'
import type { NectaryElementBase, SinchElementName } from './nectary-element-base'

interface GlobalManagerConfig {
  storeKey: symbol,
  registryUrl: string,
  cdnUrl: string,
  baseElementNames: Set<string>,
  nameToPathMap?: Map<string, string>,
}

interface GlobalManagerInitOptions {
  /**
   * If components should be preloaded from the bundle module (nectary/components/bundle) (Not supported for nectary/assets).
   *
   * When preload is true:
   *
   * targetlibVersion will only work since v5 of nectary/components and v3 of nectary/assets.
   *
   * parchPreviousVersions will have no effect since its not needed.
   *
   * fallbackLoaderBundle will be used instead of fallbackLoader
   */
  preload?: boolean,
  /**
   * Target version of the library to resolve the constructor from the CDN.
   *
   * If left unspecified, it will resolve to the latest version.
   */
  targetlibVersion?: string,
  /**
   * If previous versions of Nectary should opt in to using Global Components.
   *
   * @default true
   */
  patchPerviousVersions?: boolean,
  /**
   * Fallback loader if the CDN fails.
   */
  fallbackLoader?: (name: string) => Promise<any>,
  /**
   * Should be used like this:
   *
   * fallbackLoaderBundle: () => import("@nectary/components/bundle")
   */
  fallbackLoaderBundle?: () => Promise<any>,
  /**
   * Constructors will be resolved from fallback directly and CDN will not be used.
   */
  useFallbackExclusively?: boolean,
}

export abstract class GlobalElementsManager {
  private config: GlobalManagerConfig

  constructor(config: GlobalManagerConfig) {
    this.config = config
  }

  public getConstructor(name: SinchElementName): Promise<CustomElementConstructor> | null {
    return getConstructor(this.config.storeKey, name)
  }

  // This patch is made so that older Nectary versions automatically gets opted in to global components
  private patchCustomElements(): void {
    const originalDefine = window.customElements.define.bind(window.customElements)

    window.customElements.define = (
      name: string | SinchElementName,
      constructor: CustomElementConstructor,
      options?: ElementDefinitionOptions
    ) => {
      if (isSinchElementName(name) && this.config.baseElementNames.has(sinchElementNameToBase(name))) {
        const nectaryConstructor = constructor as typeof NectaryElementBase

        if (nectaryConstructor.isGlobal) {
          return originalDefine(name, constructor, options)
        }

        (async () => {
          try {
            const globalConstructor = await this.getConstructor(name)

            if (globalConstructor !== null) {
              originalDefine(name, globalConstructor, options)
            } else {
              console.error(`Nectary element ${name} not found, falling back to local constructor`)
              // Fallback to local constructor
              originalDefine(name, constructor, options)
            }
          } catch (error) {
            console.error(`Failed to get global constructor for ${name}:`, error)
            // Fallback to local constructor
            originalDefine(name, constructor, options)
          }
        })()
      } else {
        return originalDefine(name, constructor, options)
      }
    }
  }

  private toClassName(itemName: string): string {
    return itemName
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('')
  }

  private async loadModuleWithFallback<TModule = Record<string, any>>(
    importPath: string,
    fallbackThunk?: (() => Promise<TModule>) | null,
    useFallbackExclusively: boolean = false
  ): Promise<TModule> {
    if (useFallbackExclusively && fallbackThunk != null) {
      return fallbackThunk()
    }

    try {
      const module = await import(/* webpackIgnore: true */ importPath)

      return module as TModule
    } catch (error) {
      if (fallbackThunk != null) {
        try {
          return fallbackThunk()
        } catch (fallbackError) {
          console.error(`Nectary Primary load failed: ${importPath}`, error)
          console.error(`Nectary fallback load failed:`, fallbackError)
          throw fallbackError
        }
      }

      console.error(`Nectary failed to load module: ${importPath}`, error)
      throw error
    }
  }

  private createLoader(importPath: string, itemName: string, fallbackLoader?: (name: string) => Promise<any>, useFallbackExclusively: boolean = false) {
    return async () => {
      const module = await this.loadModuleWithFallback(
        importPath,
        (fallbackLoader != null) ? () => fallbackLoader(itemName) : null,
        useFallbackExclusively
      )

      const className = this.toClassName(itemName)
      const globalConstructor = module[className] as typeof NectaryElementBase | undefined

      if (globalConstructor == null) {
        throw new Error(`Nectary element ${className} not found in module: ${importPath}`)
      }

      globalConstructor.isGlobal = true

      return globalConstructor
    }
  }

  private async preloadBundle(importPath: string, fallbackLoaderBundle?: () => Promise<any>, useFallbackExclusively: boolean = false) {
    const store = getStore(this.config.storeKey)

    const module = await this.loadModuleWithFallback(
      importPath,
      fallbackLoaderBundle,
      useFallbackExclusively
    )

    for (const itemName of this.config.baseElementNames) {
      const className = this.toClassName(itemName)

      const globalConstructor = module[className] as typeof NectaryElementBase | undefined

      if (globalConstructor == null) {
        console.error(`Nectary element ${className} not found in module: ${importPath}`)
        continue
      }

      globalConstructor.isGlobal = true

      const sinchName = `sinch-${itemName}` as SinchElementName

      store.definitions.set(sinchName, () => Promise.resolve(globalConstructor))
      window.customElements.define(sinchName, globalConstructor)
    }
  }

  public async init(options: GlobalManagerInitOptions = {}) {
    const store = getStore(this.config.storeKey)

    if (store.hasInitialized) {
      console.warn(`${this.constructor.name} has already been initialized`)

      return
    }

    store.hasInitialized = true
    store.preload = options.preload ?? false
    store.patchPerviousVersions = options.patchPerviousVersions ?? true
    store.useFallbackExclusively = options.useFallbackExclusively ?? false

    if (store.preload) {
      const version = options.targetlibVersion

      store.targetlibVersion = version ?? store.targetlibVersion

      const importPath = version != null
        ? `${this.config.cdnUrl}@${version}/es2022/bundle.mjs`
        : `${this.config.cdnUrl}/bundle`

      await this.preloadBundle(importPath, options.fallbackLoaderBundle, store.useFallbackExclusively)

      return
    }

    if (store.patchPerviousVersions) {
      this.patchCustomElements()
    }

    // Initial loaders with un-versioned importPath (automatically resolves to latest module but takes 2 requests)
    this.config.baseElementNames.forEach((name: string) => {
      const importPath = `${this.config.cdnUrl}/${this.getImportPathFromName(name)}`

      store.definitions.set(`sinch-${name}`, this.createLoader(importPath, name, options.fallbackLoader, store.useFallbackExclusively))
    })

    if (options.targetlibVersion != null) {
      store.targetlibVersion = options.targetlibVersion
    } else {
      const registry = await fetch(`${this.config.registryUrl}/latest`)
      const registryData = await registry.json()

      store.targetlibVersion = registryData.version
    }

    // Overwrite the loaders with versioned importPath so it only takes one request to resolve modules
    this.config.baseElementNames.forEach((name: string) => {
      const importPath = `${this.config.cdnUrl}@${store.targetlibVersion}/es2022/${this.getImportPathFromName(name)}.mjs`

      store.definitions.set(`sinch-${name}`, this.createLoader(importPath, name, options.fallbackLoader, store.useFallbackExclusively))
    })
  }

  private getImportPathFromName(name: string): string {
    for (const [key, value] of this.config.nameToPathMap ?? []) {
      const splittedName = name.startsWith(key) ? name.split(key) : [name]

      if (splittedName.length > 1) {
        const restOfName = splittedName.slice(1).join(key)

        return value + restOfName
      }
    }

    return name
  }

  public async preload(name: SinchElementName | SinchElementName[] | 'all') {
    const store = getStore(this.config.storeKey)

    if (name === 'all') {
      await Promise.all(Array.from(store.definitions.keys()).map((n) => store.definitions.get(n)?.()))

      return
    }

    if (Array.isArray(name)) {
      await Promise.all(name.map((n) => store.definitions.get(n)?.()))

      return
    }

    await store.definitions.get(name)?.()
  }
}
