import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faChevronDown, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/** import brand icons */
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faBars)
library.add(faChevronDown)
library.add(faSquareFacebook)
library.add(faSquareInstagram)
library.add(faSquareTwitter)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
