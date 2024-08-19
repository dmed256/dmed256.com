import type { Command, CommandRunArgs } from '@/apps/Terminal/types';
import { colored, fakeBash } from '@/apps/Terminal/utils/colors';
import { splitPath, getPathDirectory } from '@/os/utils/path';
import { useOsStore } from '@/os/osStore';

export const rm: Command = {
  help: [colored.white('Remove directory entries')],
  run: ({ state, args }: CommandRunArgs) => {
    const {
      pwd,
      actions: { appendPs1, appendTerminalText },
    } = state;

    if (!args.length) {
      appendTerminalText(
        fakeBash([
          colored.red('rm'),
          colored.white(': missing files to remove\n'),
        ])
      );
      appendPs1();
      return;
    }

    let isRecursive = false;
    let isForce = false;

    if (args[0].startsWith('-') && !args[0].startsWith('--')) {
      const flags = args[0];
      args = args.slice(1);

      isRecursive = flags.includes('r') || flags.includes('R');
      isForce = flags.includes('f');
    }

    useOsStore.setState((state) => {
      args.forEach((arg) => {
        const path = splitPath({ path: arg, pwd });

        const dirPath = path.slice(0, -1);
        const filename = path[path.length - 1];

        const directory = getPathDirectory({
          path: dirPath,
          root: state.root,
        });
        const entry = directory?.children?.[filename];

        if (!entry) {
          if (!isForce) {
            appendTerminalText([
              colored.red('rm'),
              colored.white(`: ${arg}: No such file or directory\n`),
            ]);
          }
          return;
        }

        if (entry.type === 'file') {
          delete directory.children[filename];
        } else if (entry.type === 'directory') {
          if (isRecursive) {
            delete directory.children[filename];
          } else {
            appendTerminalText([
              colored.red('rm'),
              colored.white(`: ${arg}: is a directory\n`),
            ]);
          }
        }
      });
    });

    appendPs1();
  },
};
