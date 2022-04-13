import { createApp } from 'vue'
import App from '@/App.vue'
import UI_components from "@/components/UI/ui"
import router from '@/router/router';
import directives from '@/directives/directives';
import store from '@/store'


const app = createApp(App)

UI_components.forEach(component => app.component(component.name,component));

directives.forEach(directive => app.directive(directive.name,directive));

app.use(router).use(store).mount('#app')
