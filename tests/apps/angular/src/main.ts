import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { AppModule } from './app/app.module'
import 'axe-core'

setNectaryRegistry(customElements)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err))
