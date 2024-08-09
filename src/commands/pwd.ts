import { useStore } from '@/store';
import type { Command } from '@/types';
import { colored } from '@/utils/colors';
import { joinPath } from '@/utils/path';

export const pwd: Command = {
  help: [colored.white('Print working directory name')],
  run: () => {
    const { pwd } = useStore.getState();
    const { appendTerminalText, appendPs1 } = useStore.getState().actions;
    appendTerminalText([colored.white(joinPath(pwd) + '\n')]);
    appendPs1();
  },
};
