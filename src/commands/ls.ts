import { useStore } from '@/store';
import type { Command } from '@/types';
import { colored } from '@/utils';
import { tree } from '@/constants';

export const ls: Command = {
  help: [colored.white('Lists directory contents')],
  run: (args: string[]) => {
    const { appendTerminalText, appendPs1 } = useStore.getState().actions;
    appendPs1();
  },
};
