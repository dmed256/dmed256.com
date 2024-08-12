import type { Command, CommandRunArgs } from '@/apps/Terminal/types';
import { colored } from '@/apps/Terminal/utils/colors';
import { joinPath } from '@/apps/Terminal/utils/path';

export const pwd: Command = {
  help: [colored.white('Print working directory name')],
  run: ({ state }: CommandRunArgs) => {
    const {
      pwd,
      actions: { appendTerminalText, appendPs1 },
    } = state;
    appendTerminalText([colored.white(joinPath(pwd) + '\n')]);
    appendPs1();
  },
};
