import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from "pinia";

//components
import CardTemplete from './components/partials/cards/CardTemplate.vue';
import ListCard from './components/partials/cards/ListCards.vue';

loadFonts()
const pinia = createPinia();
const app = createApp(App)

app.component('cardTemplete', CardTemplete)
app.component('listCard', ListCard)

app.use(vuetify)
app.use(pinia);
app.mount('#app')
