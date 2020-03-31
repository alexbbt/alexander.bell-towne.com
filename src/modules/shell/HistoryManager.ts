class HistoryManager {
  private history: string[];

  private index: number;

  /**
   * The input that was set when the arrow keys are first hit.
   */
  private originalInput: string | null;

  constructor() {
    this.history = [];
    this.index = -1;

    this.originalInput = null;
  }

  add(string: string) {
    this.index = -1;
    this.history.unshift(string);
  }

  previous(input: string): string | null {
    const index = this.index + 1;
    return this.get(index, input);
  }

  next(input: string): string | null {
    const index = this.index - 1;
    return this.get(index, input);
  }

  private get(index: number, input: string): string | null {
    // The first time here, set the original input.`
    if (this.originalInput == null) {
      this.originalInput = input;
    }

    // If it is on the history index.
    if (index > -1 && index < this.history.length) {
      this.index = index;
      return this.history[index];
    }

    // Back to the original
    if (index === -1) {
      this.index = index;
      return this.originalInput;
    }

    // Over end, do nothing.
    return null;
  }
}

export default HistoryManager;
