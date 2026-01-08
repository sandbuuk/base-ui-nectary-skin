import { getConstructor, getStore } from './global-elements-store'
import { isSinchElementName, sinchElementNameToBase } from './nectary-element-base'
import type { NectaryElementBase, SinchElementName } from './nectary-element-base'

interface GlobalManagerConfig {
  storeKey: symbol,
  registryUrl: string,
  baseElementNames: Set<string>,
  nameToPathMap?: Map<string, string>,
}

interface GlobalManagerInitOptions {
  /**
   * URL to resolve the modules from
   */
  cdnUrl: string,
  /**
   * Fallback URL to resolve the modules from if `cdnUrl` fails
   */
  fallbackCdnUrl?: string,
  /**
   * Preloads all components from the bundle.js module
   */
  preload?: boolean,
  /**
   * Target version of the library to resolve
   *
   * If left unspecified, it will resolve to the latest version
   */
  targetlibVersion?: string,
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

  private async loadModuleWithFallback<TModule = Record<string, any>>(modulePath: string): Promise<TModule> {
    const store = getStore(this.config.storeKey)

    const importPath = this.getImportPath(store.cdnUrl, modulePath)!
    const fallbackImportPath = this.getImportPath(store.fallbackCdnUrl, modulePath)

    const promises = [
      import(/* webpackIgnore: true */ importPath),
    ]

    let timeoutId: ReturnType<typeof setTimeout> | null = null
    const FALLBACK_DELAY_MS = 2000

    if (fallbackImportPath !== null) {
      promises.push(
        new Promise((resolve) => {
          timeoutId = setTimeout(() => resolve(import(/* webpackIgnore: true */ fallbackImportPath)), FALLBACK_DELAY_MS)
        })
      )
    }

    try {
      const module = await Promise.any(promises)

      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }

      return module as TModule
    } catch (error) {
      // AggregateError - all attempts failed
      if (error instanceof AggregateError) {
        console.error(`Nectary Primary load failed: ${importPath}`, error.errors[0])

        if (fallbackImportPath !== null) {
          console.error(`Nectary fallback load failed: ${fallbackImportPath}`, error.errors[1])
        }
      } else {
        console.error(`Nectary failed to load module: ${importPath}`, error)
      }
      throw error
    }
  }

  private createLoader(modulePath: string, itemName: string) {
    return async () => {
      const module = await this.loadModuleWithFallback(modulePath)

      const className = this.toClassName(itemName)
      const globalConstructor = module[className] as typeof NectaryElementBase | undefined

      if (globalConstructor == null) {
        throw new Error(`Nectary element ${className} not found in module`)
      }

      globalConstructor.isGlobal = true

      return globalConstructor
    }
  }

  private async preloadBundle() {
    const store = getStore(this.config.storeKey)

    const module = await this.loadModuleWithFallback('bundle')

    for (const itemName of this.config.baseElementNames) {
      const className = this.toClassName(itemName)

      const globalConstructor = module[className] as typeof NectaryElementBase | undefined

      if (globalConstructor == null) {
        console.error(`Nectary element ${className} not found in module`)
        continue
      }

      globalConstructor.isGlobal = true

      const sinchName = `sinch-${itemName}` as SinchElementName

      store.definitions.set(sinchName, () => Promise.resolve(globalConstructor))

      try {
        window.customElements.define(sinchName, globalConstructor)
      } catch (error) {
        console.warn(error)
      }
    }
  }

  public async init(options: GlobalManagerInitOptions) {
    const store = getStore(this.config.storeKey)

    if (store.hasInitialized) {
      console.warn(`${this.constructor.name} has already been initialized`)

      return
    }

    store.hasInitialized = true
    store.cdnUrl = options.cdnUrl
    store.fallbackCdnUrl = options.fallbackCdnUrl ?? ''
    store.targetlibVersion = options.targetlibVersion ?? ''
    store.preload = options.preload ?? false

    try {
      if (store.preload) {
        await this.preloadBundle()
      } else {
        this.patchCustomElements()

        const setDefinitions = () => {
          this.config.baseElementNames.forEach((name: string) => {
            const modulePath = this.getModulePath(name)

            store.definitions.set(`sinch-${name}`, this.createLoader(modulePath, name))
          })
        }

        // Initial loaders with un-versioned importPath (automatically resolves to latest module but takes 2 requests for esm.sh)
        setDefinitions()

        const host = new URL(store.cdnUrl).host

        // Overwrites the loaders with versioned importPath so it only takes one request to resolve modules (for esm.sh)
        if (host === 'esm.sh' && store.targetlibVersion.length === 0 && store.preload === false) {
          const registry = await fetch(`${this.config.registryUrl}/latest`)
          const registryData = await registry.json()

          store.targetlibVersion = registryData.version

          setDefinitions()
        }
      }
    } finally {
      store.loadPromise.resolve()
    }
  }

  whenLoaded(): Promise<void> {
    const store = getStore(this.config.storeKey)

    return store.loadPromise.promise
  }

  private getImportPath(cdnUrl: string, modulePath: string): string | null {
    if (cdnUrl.length === 0) {
      return null
    }

    const store = getStore(this.config.storeKey)
    const host = new URL(cdnUrl).host

    if (host === 'esm.sh') {
      if (store.targetlibVersion.length !== 0) {
        return `${cdnUrl}@${store.targetlibVersion}/es2022/${modulePath}.mjs`
      }

      return `${cdnUrl}/${modulePath}`
    }

    if (store.targetlibVersion.length !== 0) {
      return `${cdnUrl}/${store.targetlibVersion}/${modulePath}.js`
    }

    return `${cdnUrl}/latest/${modulePath}.js`
  }

  private getModulePath(name: string): string {
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
