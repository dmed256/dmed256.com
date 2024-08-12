import type { Command, CommandRunArgs } from '@/apps/Terminal/types';
import { colored } from '@/apps/Terminal/utils/colors';

export const clear: Command = {
  help: [colored.white('Clear terminal contents')],
  run: ({ state }: CommandRunArgs) => {
    const { clearTerminalText, appendPs1 } = state.actions;
    clearTerminalText();
    appendPs1();
  },
};
