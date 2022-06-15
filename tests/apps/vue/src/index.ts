import { setNectaryRegistry } from '@sinch-engage/nectary/utils'
import { createApp } from 'vue'
import App from './App.vue'

setNectaryRegistry(customElements)

createApp(App).mount('#app')
