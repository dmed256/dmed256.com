import type { Command, CommandRunArgs } from '@/apps/Terminal/types';
import { colored, fakeBash } from '@/apps/Terminal/utils/colors';
import { splitPath, getPathDirectory } from '@/os/utils/path';
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
          colored.white(': missing files to touch\n'),
        ])
      );
      appendPs1();
      return;
    }

    useOsStore.setState((state) => {
      args.forEach((arg) => {
        const path = splitPath({ path: arg, pwd });

        const directory = getPathDirectory({
          path,
          root: state.root,
        });
        const filename = path[path.length - 1];

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
