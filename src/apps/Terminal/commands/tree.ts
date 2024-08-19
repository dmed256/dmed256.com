import type { Directory } from '@/os/types';
import type { Command, CommandRunArgs } from '@/apps/Terminal/types';
import { colored, fakeBash } from '@/apps/Terminal/utils/colors';
import { getPathDirectory } from '@/os/utils/path';

export const tree: Command = {
  help: [colored.white('List contents of directories in a tree-like format')],
  run: ({ state }: CommandRunArgs) => {
    const {
      pwd,
      actions: { appendPs1, appendTerminalText },
    } = state;

    const pwdDirectory = getPathDirectory({ path: pwd });
    if (!pwdDirectory?.children) {
      appendTerminalText(fakeBash([colored.red('where are you!?!?!?\n')]));
      appendPs1();
      return;
    }

    const { lines, directoryCount, fileCount } = getDirectoryInfo({
      directory: pwdDirectory,
      prefix: '',
      viewHidden: false,
    });

    appendTerminalText([
      colored.white('.\n'),
      ...lines.map((line) => colored.white(line + '\n')),
      colored.white(
        '\n' +
          `${directoryCount} ` +
          (directoryCount === 1 ? 'directory' : 'directories') +
          `, ${fileCount} ` +
          (fileCount === 1 ? 'file' : 'files') +
          '\n'
      ),
    ]);

    appendPs1();
  },
};

interface GetDirectoryInfoArgs {
  directory: Directory;
  prefix: string;
  viewHidden: boolean;
}

interface GetDirectoryInfoReturn {
  lines: string[];
  directoryCount: number;
  fileCount: number;
}

const getDirectoryInfo = ({
  directory,
  prefix,
  viewHidden,
}: GetDirectoryInfoArgs): GetDirectoryInfoReturn => {
  let lines: string[] = [];
  let directoryCount = 0;
  let fileCount = 0;

  const entries = Object.keys(directory.children).sort();
  entries.forEach((entry, entryIndex) => {
    if (entry.startsWith('.') && !viewHidden) {
      return;
    }

    const node = directory.children[entry];
    const isLast = entryIndex === entries.length - 1;

    if (node.type === 'directory') {
      directoryCount += 1;
    } else {
      fileCount += 1;
    }

    if (isLast) {
      lines.push(`${prefix}└── ${entry}`);
    } else {
      lines.push(`${prefix}├── ${entry}`);
    }

    if (node.type === 'directory' && Object.keys(node.children).length) {
      const nestedDirectoryInfo = getDirectoryInfo({
        directory: node,
        prefix: prefix + (isLast ? '    ' : '│   '),
        viewHidden,
      });

      lines = [...lines, ...nestedDirectoryInfo.lines];
      directoryCount += nestedDirectoryInfo.directoryCount;
      fileCount += nestedDirectoryInfo.fileCount;
    }
  });

  return {
    lines,
    directoryCount,
    fileCount,
  };
};
