import type { AppRouteModule } from '/@/router/types';

export const mainOutRoutes: AppRouteModule[] = [
  {
    path: '/main-out',
    name: 'MainOut',
    component: () => import('/@/views/demo/main-out/index.vue'),
    meta: {},
  },
];

export const mainOutRouteNames = mainOutRoutes.map((item) => item.name);
