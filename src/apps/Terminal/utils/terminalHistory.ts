const LOCAL_STORAGE_KEY = 'terminalHistory';

export const terminalHistory = {
  get: (): string[] => {
    const history = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (history) {
      try {
        const parsedHistory = JSON.parse(history);
        if (Array.isArray(parsedHistory)) {
          return parsedHistory;
        }
      } catch (e) {
        // Do nothing, will return empty array
      }
    }
    terminalHistory.set([]);
    return [];
  },
  set: (contents: string[]): void => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contents));
  },
  push: (line: string): string[] => {
    const cleanLine = line.trim();
    const currentLines = terminalHistory.get();
    if (!cleanLine) {
      return currentLines;
    }

    const updatedTerminalHistory = [...currentLines, cleanLine];
    terminalHistory.set(updatedTerminalHistory);
    return updatedTerminalHistory;
  },
};
