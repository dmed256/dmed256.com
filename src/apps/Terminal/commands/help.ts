import { commands } from '@/apps/Terminal/commands';
import { colored } from '@/apps/Terminal/utils/colors';
import type { Command, CommandRunArgs } from '@/apps/Terminal/types';

export const help: Command = {
  help: [colored.white('Prints this set of commands')],
  run: ({ state }: CommandRunArgs) => {
    const { appendTerminalText, appendPs1 } = state.actions;
    appendTerminalText([
      colored.white('\n'),
      colored.green('# TODO(dmed): Implement resume\n'),
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
