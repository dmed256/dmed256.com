import { useStore } from '@/store';
import { commands } from '@/commands';
import { colored } from '@/utils';
import type { Command } from '@/types';

export const help: Command = {
  help: [colored.white('Prints this set of commands')],
  run: () => {
    const { appendTerminalText, appendPs1 } = useStore.getState().actions;
    appendTerminalText([
      colored.white('\n'),
      colored.green('# TODO(dmed): Implement cd, ls, resume\n'),
      colored.white('Commands:\n'),
      ...Object.keys(commands)
        .sort()
        .flatMap((commandName) => {
          const command = commands[commandName];
          return [
            colored.yellow(`    ${commandName}`),
            colored.white(': '),
            ...command.help,
            colored.white('\n'),
          ];
        }),
      colored.white('\n'),
    ]);
    appendPs1();
  },
};
