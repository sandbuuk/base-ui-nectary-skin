import { setNectaryRegistry } from '@nectary/components/utils'
import { setAssetsRegistry } from '@nectary/assets/utils'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

setNectaryRegistry(customElements)
setAssetsRegistry(customElements)

createApp(App).use(router).mount('#app')
