/* eslint-disable import/prefer-default-export */

declare global {
  interface Window { FS: { event: Function } }
}

export function fs(eventName: string, props: unknown = null) {
  if (window.FS) {
    window.FS.event(eventName, props);
  }
}
