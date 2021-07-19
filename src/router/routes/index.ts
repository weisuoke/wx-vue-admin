import { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

import { REDIRECT_ROUTE } from '/@/router/routes/basic';

import { mainOutRoutes } from '/@/router/routes/mainOut';
import { PageEnum } from '/@/enums/pageEnum';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/login.vue'),
  meta: {},
};

export const defaultRoutes = [...asyncRoutes, RootRoute];

export const basicRoute = [LoginRoute, RootRoute, ...mainOutRoutes, REDIRECT_ROUTE];
