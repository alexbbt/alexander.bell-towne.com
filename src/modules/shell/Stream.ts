function safeCall(listener: Function, ...args: unknown[]) {
  try {
    listener(...args);
  } catch (error) {
    // console.error('Error calling function');
    // console.error(error);
  }
}

class Stream {
  private buffer: unknown[] = [];

  private listeners: Function[] = [];

  read(listener: Function) {
    this.buffer.forEach((line) => {
      safeCall(listener, line);
    });

    this.listeners.push(listener);
  }

  write(line: unknown) {
    this.buffer.push(line);

    this.listeners.forEach((listener) => {
      safeCall(listener, line);
    });
  }
}

export default Stream;
