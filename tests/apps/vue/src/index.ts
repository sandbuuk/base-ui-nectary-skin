import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { setAssetsRegistry } from '@sinch-engage/nectary-assets/utils'
import { createApp } from 'vue'
import App from './App.vue'

setNectaryRegistry(customElements)
setAssetsRegistry(customElements)

createApp(App).mount('#app')
