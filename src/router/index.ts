import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { basicRoute } from './routes';

// app router
export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: basicRoute as unknown as RouteRecordRaw[],
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
