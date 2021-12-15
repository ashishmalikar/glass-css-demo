import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import "glass-css/dist/css/glass-ui.css"

// component imports
import Container from "@/components/glass-css/Container.vue"
import ActionBar from "@/components/glass-css/ActionBar.vue"
import GlsCard from "@/components/glass-css/card/Card.vue"
import GlsCardContent from "@/components/glass-css/card/Card.vue"

let app = createApp(App)

app.component("gls-container", Container)
app.component("gls-action-bar", ActionBar)
app.component("gls-card", GlsCard)
app.component("gls-card-content", GlsCardContent)

app.use(router).mount('#app')

// app.config.globalProperties.$theme = 'dark' // theme can be light / dark

app.config.globalProperties.foo = 'bar'

/**
 * Approches
 * 
 * with class names
 * with data variables
 *  - data-primary-btn
 *  - data-btn
 *  - data-variant-primary
 * 
 * 
 * 
 * 
 */