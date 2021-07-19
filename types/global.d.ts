declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  VITE_PUBLIC_PATH: string;
}
