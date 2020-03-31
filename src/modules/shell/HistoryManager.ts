class HistoryManager {
  private history: string[];

  private index: number;

  constructor() {
    this.history = [];
    this.index = -1;
  }

  add(string: string) {
    this.index = -1;
    this.history.unshift(string);
  }

  previous(): string | null {
    const index = this.index - 1;
    return this.get(index);
  }

  next(): string | null {
    const index = this.index + 1;
    return this.get(index);
  }

  private get(index: number): string | null {
    if (index > -1 && index < this.history.length) {
      this.index = index;
      return this.history[index];
    }
    return null;
  }
}

export default HistoryManager;
