import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { setAssetsRegistry } from '@sinch-engage/nectary-assets/utils'
import { AppModule } from './app/app.module'
import 'axe-core'

setNectaryRegistry(customElements)
setAssetsRegistry(customElements)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err))
