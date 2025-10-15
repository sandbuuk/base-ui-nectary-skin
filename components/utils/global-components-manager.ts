// This file should not be exported in index.ts since it would add bloat to MFE's bundle sizes
// The host applicatin should import this file from "@nectary/components/utils/global-components-manager"
import { GlobalElementsManager } from '@nectary/shared'
import { BASE_COMPONENT_NAMES } from './component-names'
import { COMPONENTS_REGISTRY_URL, COMPONENTS_STORE_KEY } from './global-components-constants'

class GlobalComponentsManagerImpl extends GlobalElementsManager {
  private static instance: GlobalComponentsManagerImpl | null = null

  constructor() {
    super({
      storeKey: COMPONENTS_STORE_KEY,
      registryUrl: COMPONENTS_REGISTRY_URL,
      baseElementNames: BASE_COMPONENT_NAMES,
    })
  }

  static getInstance(): GlobalComponentsManagerImpl {
    if (GlobalComponentsManagerImpl.instance == null) {
      GlobalComponentsManagerImpl.instance = new GlobalComponentsManagerImpl()
    }

    return GlobalComponentsManagerImpl.instance
  }
}

export const GlobalComponentsManager = new GlobalComponentsManagerImpl()
