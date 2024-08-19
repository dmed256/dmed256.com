import type { Command, CommandRunArgs } from '@/apps/Terminal/types';
import { colored, fakeBash } from '@/apps/Terminal/utils/colors';
import { absPath, getPathDirectory } from '@/os/utils/path';
import { useOsStore } from '@/os/osStore';

export const touch: Command = {
  help: [colored.white('Change file access and modification times')],
  run: ({ state, args }: CommandRunArgs) => {
    const {
      pwd,
      actions: { appendPs1, appendTerminalText },
    } = state;

    if (!args.length) {
      appendTerminalText(
        fakeBash([
          colored.red('touch'),
          colored.white(' missing files to touch\n'),
        ])
      );
    }

    useOsStore.setState((state) => {
      args.forEach((arg) => {
        arg = arg.trim();
        if (!arg) {
          return;
        }

        let argPath: string[];
        if (arg.startsWith('/') || arg.startsWith('~/')) {
          argPath = absPath(arg.split('/'));
        } else {
          argPath = absPath([...pwd, ...arg.split('/')]);
        }

        const directory = getPathDirectory(argPath.slice(0, -1), state.root);
        const filename = argPath[argPath.length - 1];

        if (!directory) {
          appendTerminalText([
            colored.red('touch'),
            colored.white(` ${arg}: Not a directory\n`),
          ]);
          return;
        }

        if (!directory.children[filename]) {
          directory.children[filename] = { type: 'file' };
        }
      });
    });

    appendPs1();
  },
};
