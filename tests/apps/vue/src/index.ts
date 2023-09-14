import { setNectaryRegistry } from '@nectary/components/utils'
import { setAssetsRegistry } from '@nectary/assets/utils'
import { createApp } from 'vue'
import App from './App.vue'

setNectaryRegistry(customElements)
setAssetsRegistry(customElements)

createApp(App).mount('#app')
