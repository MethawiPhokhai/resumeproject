import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SkillApp from './views/Skill.vue'


const app = createApp(App).use(router)
app.mount('#app')

