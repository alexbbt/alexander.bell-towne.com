/* eslint-disable import/prefer-default-export */

declare global {
  interface Window { FS: { event: Function } }
}

export function fs(eventName: string, props: Record<string, unknown>) {
  if (window.FS && window.FS.event) {
    const eventData: Record<string, string> = {};
    Object.entries(props).forEach(([key, value]) => {
      eventData[key] = JSON.stringify(value);
    });
    window.FS.event(eventName, eventData);
  }
}
