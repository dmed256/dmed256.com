import { useStore } from '@/store';
import type { Command } from '@/types';
import { colored } from '@/utils';

export const clear: Command = {
  help: [colored.white('Clear terminal contents')],
  run: () => {
    const { clearTerminalText, appendPs1 } = useStore.getState().actions;
    clearTerminalText();
    appendPs1();
  },
};
