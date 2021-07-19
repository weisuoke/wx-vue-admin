import '/@/design/tailwind.css';
import { setupRouter } from '/@/router';

import { createApp } from 'vue';
import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);

  app.mount('#app', true);
}

void bootstrap();
