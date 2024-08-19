import type { INode } from '@/os/types';
import type {
  Command,
  CommandRunArgs,
  TerminalText,
} from '@/apps/Terminal/types';
import { colored, fakeBash } from '@/apps/Terminal/utils/colors';
import { getPathDirectory } from '@/os/utils/path';
import { getAppHtmlId } from '@/utils/html';
import groupBy from 'lodash/groupBy';
import padEnd from 'lodash/padEnd';
import range from 'lodash/range';
import max from 'lodash/max';
import sum from 'lodash/sum';

export const ls: Command = {
  help: [colored.white('Lists directory contents')],
  run: ({ state, args }: CommandRunArgs) => {
    const {
      pwd,
      actions: { appendPs1, appendTerminalText },
    } = state;

    let flags = '';
    if (args.length && args[0].startsWith('-') && !args[0].startsWith('--')) {
      flags = args[0];
      args = args.slice(1);
    }

    if (args.length) {
      appendTerminalText(
        fakeBash([
          colored.red('ls'),
          colored.white(' arguments not supported yet\n'),
        ])
      );
      appendPs1();
      return;
    }

    const directoryChildren = getPathDirectory({ path: pwd })?.children;
    if (!directoryChildren) {
      appendTerminalText(fakeBash([colored.red('where are you!?!?!?\n')]));
      appendPs1();
      return;
    }

    const grid = getGrid({
      appId: state.appId,
      directoryChildren,
      showDot: flags.includes('a'),
      showDotDot: flags.includes('A'),
    });
    const rows = grid.length;
    const cols = grid[0]?.length ?? 0;

    if (!rows || !cols) {
      appendPs1();
      return;
    }

    const colWidths = range(cols).map(
      (col) => max(range(rows).map((row) => grid[row][col]?.length ?? 0))!
    );
    appendTerminalText(
      grid.flatMap((row): TerminalText[] =>
        row.flatMap((entry, colIndex): TerminalText[] => {
          const isLastCol = row[colIndex + 1] == null;
          const entryNode = directoryChildren[entry];
          if (!entryNode) {
            return [];
          }

          const paddedEntry = padEnd(
            entry,
            colWidths[colIndex] + (isLastCol ? 0 : 2)
          );
          const text =
            entryNode.type === 'directory'
              ? colored.blue(paddedEntry)
              : colored.white(paddedEntry);

          return isLastCol ? [text, colored.white('\n')] : [text];
        })
      )
    );

    appendPs1();
  },
};

interface GetGridArgs {
  appId: string;
  directoryChildren: Record<string, INode>;
  showDot: boolean;
  showDotDot: boolean;
}

const getGrid = ({
  appId,
  directoryChildren,
  showDot,
}: GetGridArgs): string[][] => {
  const terminal = document.getElementById(getAppHtmlId(appId))!;

  // Best effort in case something isn't supported by the browser ¯\_(ツ)_/¯
  let terminalWidth = terminal.clientWidth * 0.13;

  try {
    const terminalStyle = window.getComputedStyle(terminal);

    var ctx = document.createElement('canvas').getContext('2d')!;
    ctx.font = terminalStyle.font;

    const approxPadding =
      10 +
      parseInt(terminalStyle.paddingLeft) +
      parseInt(terminalStyle.paddingRight);
    terminalWidth = Math.floor(
      (terminal.clientWidth - approxPadding) / ctx.measureText('a').width
    );
  } catch (_) {}

  const unsortedEntries = Object.keys(directoryChildren)
    .filter((entry) => showDot || !entry.startsWith('.'))
    .sort();
  const contents: {
    directory?: string[];
    file?: string[];
  } = groupBy(unsortedEntries, (entry) => directoryChildren[entry].type);
  const entries = [...(contents.directory ?? []), ...(contents.file ?? [])];

  for (let rows = 1; rows < 100; ++rows) {
    const cols = Math.ceil(entries.length / rows);
    const grid = range(rows).map((row) =>
      range(cols).map((col) => entries[row * cols + col])
    );

    const colWidths = range(cols).map((col) =>
      max(range(rows).map((row) => grid[row][col]?.length ?? 0))
    );
    const widthNeeded = sum(colWidths) + 2 * (cols - 1);
    if (widthNeeded < terminalWidth) {
      return grid;
    }
  }
  return [];
};
