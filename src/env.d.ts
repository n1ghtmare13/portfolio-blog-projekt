// src/env.d.ts

/// <reference types="astro/client" />

declare module 'bootstrap/dist/js/bootstrap.bundle.min.js';

declare module '*.svg' {
  const content: ImageMetadata;
  export default content;
}

declare module '*.png' {
  const content: ImageMetadata;
  export default content;
}

declare module '*.jpg' {
  const content: ImageMetadata;
  export default content;
}

declare module '*.jpeg' {
  const content: ImageMetadata;
  export default content;
}

declare module '*.webp' {
  const content: ImageMetadata;
  export default content;
}

declare module 'virtual:pwa-register' {
  export type RegisterSWOptions = {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    onRegistered?: (
      registration: ServiceWorkerRegistration | undefined
    ) => void;
    onRegisterError?: (error: any) => void;
  };

  export function registerSW(
    options?: RegisterSWOptions
  ): (reloadPage?: boolean) => Promise<void>;
}
