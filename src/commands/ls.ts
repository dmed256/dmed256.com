import { useStore } from '@/store';
import type { Command, INode, TerminalText } from '@/types';
import { colored, fakeBash } from '@/utils/colors';
import { getPathDirectory } from '@/utils/path';
import groupBy from 'lodash/groupBy';
import padEnd from 'lodash/padEnd';
import range from 'lodash/range';
import max from 'lodash/max';
import sum from 'lodash/sum';

export const ls: Command = {
  help: [colored.white('Lists directory contents')],
  run: (args: string[]) => {
    const {
      pwd,
      actions: { appendPs1, appendTerminalText },
    } = useStore.getState();

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

    const directoryChildren = getPathDirectory(pwd)?.children;
    if (!directoryChildren) {
      appendTerminalText(fakeBash([colored.red('where are you!?!?!?\n')]));
      appendPs1();
      return;
    }

    const grid = getGrid(directoryChildren);
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

const getGrid = (directoryChildren: Record<string, INode>): string[][] => {
  const terminal = document.getElementById('terminal')!;

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
    console.log({
      'terminal.clientWidth': terminal.clientWidth,
      terminalWidth,
    });
  } catch (_) {}

  const unsortedEntries = Object.keys(directoryChildren)
    .filter((entry) => !entry.startsWith('.'))
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
