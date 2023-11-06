import { createApp } from 'vue'
import Vue3Lottie from 'vue3-lottie'
import App from './index.vue'
import { router } from './providers'
// Vuetify
import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'
const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: 'dark'
	},
	icons: {
		defaultSet: 'fa',
		aliases,
		sets: {
			fa,
		},
	},

})
export const app = createApp(App).use(router).use(vuetify).use(Vue3Lottie)