import type { Command, CommandRunArgs } from '@/apps/Terminal/types';
import { colored, fakeBash } from '@/apps/Terminal/utils/colors';
import { absPath, getPathDirectory } from '@/os/utils/path';
import { homeDirectory } from '@/os/constants';

export const cd: Command = {
  help: [colored.white('Change directory')],
  run: ({ state, args }: CommandRunArgs) => {
    const {
      pwd,
      actions: { setPwd, appendPs1, appendTerminalText },
    } = state;

    if (args.length === 0) {
      setPwd(homeDirectory);
    } else if (args.length === 1) {
      const arg = args[0].trim();

      let nextPwd: string[];
      if (arg.startsWith('/') || arg.startsWith('~')) {
        nextPwd = absPath(arg.split('/'));
      } else {
        nextPwd = absPath([...pwd, ...arg.split('/')]);
      }

      const directoryChildren = getPathDirectory(nextPwd)?.children;
      if (directoryChildren) {
        setPwd(nextPwd);
      } else {
        appendTerminalText(
          fakeBash([
            colored.red('cd'),
            colored.white(` ${arg}: No such file or directory\n`),
          ])
        );
      }
    } else {
      appendTerminalText(
        fakeBash([colored.red('cd'), colored.white(' too many arguments\n')])
      );
    }

    appendPs1();
  },
};
