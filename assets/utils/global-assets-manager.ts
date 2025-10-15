// eslint-disable-next-line import/no-extraneous-dependencies
import { GlobalElementsManager } from '@nectary/shared'
import { BASE_ASSET_NAMES, NAME_TO_PATH_MAP } from './asset-names'
import { ASSETS_REGISTRY_URL, ASSETS_STORE_KEY } from './global-assets-constants'

class GlobalAssetsManagerImpl extends GlobalElementsManager {
  private static instance: GlobalAssetsManagerImpl | null = null

  constructor() {
    super({
      storeKey: ASSETS_STORE_KEY,
      registryUrl: ASSETS_REGISTRY_URL,
      baseElementNames: BASE_ASSET_NAMES,
      nameToPathMap: NAME_TO_PATH_MAP,
    })
  }

  static getInstance(): GlobalAssetsManagerImpl {
    if (GlobalAssetsManagerImpl.instance == null) {
      GlobalAssetsManagerImpl.instance = new GlobalAssetsManagerImpl()
    }

    return GlobalAssetsManagerImpl.instance
  }
}

export const GlobalAssetsManager = GlobalAssetsManagerImpl.getInstance()
