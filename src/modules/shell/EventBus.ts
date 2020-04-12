function callListeners(listeners: Function[], ...args: any[]) {
  listeners.forEach((listener) => {
    try {
      listener(...args);
    } catch (error) {
      // console.error('Error calling listener');
      // console.error(error);
    }
  });
}

class EventBus {
  private listeners: Map<string, Function[]> = new Map();

  private listenersAll: Function[] = [];

  register(eventName: string, listener: Function) {
    let listeners = this.listeners.get(eventName);
    if (!listeners) {
      listeners = [];
    }

    listeners.push(listener);

    this.listeners.set(eventName, listeners);
  }

  registerAll(listener: Function) {
    this.listenersAll.push(listener);
  }

  emit(eventName: string, payload: object) {
    const listeners = this.listeners.get(eventName);
    if (listeners) {
      callListeners(listeners, payload);
    }
    callListeners(this.listenersAll, eventName, payload);
  }
}

export default EventBus;
